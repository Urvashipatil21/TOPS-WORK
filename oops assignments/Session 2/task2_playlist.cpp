#include <iostream>
#include <string>

using namespace std;

// Task 2: Add member function togglePublic() to Playlist class
class Playlist {
public:
    string name;
    string createdOn;
    bool isPublic;

    Playlist(string pName, string pDate, bool pPublic) {
        name = pName;
        createdOn = pDate;
        isPublic = pPublic;
    }

    // Member function to switch isPublic between true and false
    void togglePublic() {
        isPublic = !isPublic;
    }

    void printDetails() const {
        cout << "Playlist Name : " << name << endl;
        cout << "Created On    : " << createdOn << endl;
        cout << "Is Public     : " << (isPublic ? "true" : "false") << endl;
    }
};

int main() {
    // Instantiate Playlist with isPublic = true
    Playlist myPlaylist("Workout Beats", "2023-11-01", true);

    cout << "--- Initial State ---" << endl;
    myPlaylist.printDetails();

    // Toggle 1st time (true -> false)
    myPlaylist.togglePublic();
    cout << "\n--- After First Toggle ---" << endl;
    myPlaylist.printDetails();

    // Toggle 2nd time (false -> true)
    myPlaylist.togglePublic();
    cout << "\n--- After Second Toggle ---" << endl;
    myPlaylist.printDetails();

    return 0;
}
