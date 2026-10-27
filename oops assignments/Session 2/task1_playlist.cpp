#include <iostream>
#include <string>

using namespace std;

// Task 1: Create a class called Playlist with properties name, createdOn, and isPublic
class Playlist {
public:
    string name;
    string createdOn; // e.g. "2023-10-25"
    bool isPublic;

    // Constructor to initialize properties
    Playlist(string pName, string pDate, bool pPublic) {
        name = pName;
        createdOn = pDate;
        isPublic = pPublic;
    }

    // Display all properties
    void printDetails() const {
        cout << "Playlist Name : " << name << endl;
        cout << "Created On    : " << createdOn << endl;
        cout << "Is Public     : " << (isPublic ? "true" : "false") << endl;
    }
};

int main() {
    // Instantiate an object of Playlist
    Playlist myPlaylist("My Favorite Songs", "2023-10-25", true);

    // Print all its properties
    cout << "--- Playlist Properties ---" << endl;
    myPlaylist.printDetails();

    return 0;
}
