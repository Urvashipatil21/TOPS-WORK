#include <iostream>
#include <fstream>
#include <string>

using namespace std;

// Task 5: Playlist class with auto-save feature in its destructor
class Playlist {
private:
    string name;

public:
    // Constructor
    Playlist(string playlistName) {
        name = playlistName;
        cout << "Opened playlist: '" << name << "'" << endl;
    }

    // Method to rename or update playlist
    void renamePlaylist(string newName) {
        name = newName;
        cout << "Playlist renamed to: '" << name << "'" << endl;
    }

    void display() const {
        cout << "Current Playlist: " << name << endl;
    }

    // Destructor: Auto-saves playlist name to autosave.txt when destroyed
    ~Playlist() {
        cout << "\n[Spotify Auto-Save] Destructor triggered! Saving playlist name to autosave.txt..." << endl;
        
        ofstream outFile("autosave.txt");
        if (outFile.is_open()) {
            outFile << "Auto-Saved Playlist: " << name << endl;
            outFile.close();
            cout << "[Success] Playlist saved successfully to autosave.txt." << endl;
        } else {
            cout << "[Error] Could not open autosave.txt for writing." << endl;
        }
    }
};

int main() {
    cout << "=== Spotify Auto-Save Simulation ===" << endl;

    // Creating object in a local block scope to clearly demonstrate the destructor firing upon exit
    {
        cout << "\nEntering playlist session scope..." << endl;
        Playlist myPlaylist("Late Night Lo-Fi Beats");
        myPlaylist.display();

        // Renaming playlist
        myPlaylist.renamePlaylist("Late Night Chill Lo-Fi");
        
        cout << "Leaving playlist session scope now..." << endl;
        // When closing brace } is reached, myPlaylist goes out of scope and destructor is called!
    }

    cout << "\nBack in main() after playlist object was destroyed." << endl;
    cout << "Check 'autosave.txt' in the folder to see the saved content." << endl;

    return 0;
}
