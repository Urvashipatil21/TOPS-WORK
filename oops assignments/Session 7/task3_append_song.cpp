#include <iostream>
#include <fstream>
#include <string>

using namespace std;

// Task 3: Append a new song entered by user to my_fav_songs.txt using ofstream in append mode (ios::app)
int main() {
    cout << "=== Task 3: Appending a Song using ofstream (ios::app) ===" << endl;

    // Ask user for a new song
    string newSong;
    cout << "Enter the new song name to add: ";
    getline(cin, newSong);

    // Open file in append mode (ios::app) so existing lines are preserved
    ofstream outFile("my_fav_songs.txt", ios::app);

    if (!outFile.is_open()) {
        cout << "Error: Could not open 'my_fav_songs.txt' in append mode!" << endl;
        return 1;
    }

    // Append to file
    outFile << newSong << endl;
    outFile.close();

    cout << "\nSuccess: \"" << newSong << "\" was appended successfully!" << endl;

    // Display the updated list of songs from file
    cout << "\n--- Updated Contents of 'my_fav_songs.txt' ---" << endl;
    ifstream inFile("my_fav_songs.txt");
    string line;
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    inFile.close();

    return 0;
}
