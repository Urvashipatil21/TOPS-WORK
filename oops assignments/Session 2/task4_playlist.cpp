#include <iostream>
#include <vector>
#include <string>

using namespace std;

// Task 4: Extend Playlist class to include songs vector and addSong()
class Playlist {
public:
    string name;
    string createdOn;
    bool isPublic;
    vector<string> songs; // Array property for song titles

    // Constructor: songs initialized as empty array (vector)
    Playlist(string pName, string pDate, bool pPublic) {
        name = pName;
        createdOn = pDate;
        isPublic = pPublic;
        songs.clear(); // Hint: initialize songs as an empty array inside constructor
    }

    // Toggle public status
    void togglePublic() {
        isPublic = !isPublic;
    }

    // Member function to add a song to the songs array
    void addSong(string songTitle) {
        songs.push_back(songTitle);
    }

    // Display playlist info along with songs list
    void displayPlaylist() const {
        cout << "\nPlaylist: " << name << " (" << createdOn << ")" << endl;
        cout << "Public  : " << (isPublic ? "Yes" : "No") << endl;
        cout << "Songs List (" << songs.size() << "):" << endl;
        if (songs.empty()) {
            cout << "  (No songs yet)" << endl;
        } else {
            for (int i = 0; i < (int)songs.size(); i++) {
                cout << "  " << i + 1 << ". " << songs[i] << endl;
            }
        }
    }
};

int main() {
    // Instantiate Playlist
    Playlist myPlaylist("Chill Acoustic", "2023-10-24", true);

    cout << "--- Initial Playlist ---";
    myPlaylist.displayPlaylist();

    // Demonstrate adding 3 song titles
    cout << "\nAdding 3 songs to the playlist..." << endl;
    myPlaylist.addSong("Let It Be - The Beatles");
    myPlaylist.addSong("Hotel California - Eagles");
    myPlaylist.addSong("Photograph - Ed Sheeran");

    // Display updated songs list
    cout << "\n--- Updated Playlist ---";
    myPlaylist.displayPlaylist();

    return 0;
}
