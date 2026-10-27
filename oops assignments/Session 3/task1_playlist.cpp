#include <iostream>
#include <string>

using namespace std;

// Task 1: Class Playlist with a default constructor
class Playlist {
private:
    string name;

public:
    // Default constructor
    Playlist() {
        name = "My Favourites";
        cout << "Welcome to the Music Player!" << endl;
        cout << "A new playlist has been automatically created for you." << endl;
    }

    // Method to display playlist name
    void display() const {
        cout << "Playlist Name: " << name << endl;
    }
};

int main() {
    cout << "--- Creating Playlist Object ---" << endl;
    
    // Creating object using default constructor
    Playlist myPlaylist;

    cout << "\n--- Playlist Details ---" << endl;
    myPlaylist.display();

    return 0;
}
