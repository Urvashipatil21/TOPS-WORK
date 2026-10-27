#include <iostream>
#include <fstream>
#include <string>

using namespace std;

// Task 2: Read all songs from my_fav_songs.txt using ifstream and display each on a new line
int main() {
    cout << "=== Task 2: Reading Songs using ifstream ===" << endl;

    // Open file in read mode
    ifstream inFile("my_fav_songs.txt");

    // Check if file exists and can be opened
    if (!inFile.is_open()) {
        cout << "Error: Could not open 'my_fav_songs.txt'!" << endl;
        cout << "Please run task1_write_songs first to create the file." << endl;
        return 1;
    }

    cout << "\nSongs found in 'my_fav_songs.txt':\n" << endl;

    string songLine;
    // Read line-by-line using getline() until end of file
    while (getline(inFile, songLine)) {
        cout << songLine << endl;
    }

    // Close the file stream
    inFile.close();

    cout << "\nFinished reading all songs from file." << endl;

    return 0;
}
