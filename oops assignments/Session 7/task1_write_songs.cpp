#include <iostream>
#include <fstream>
#include <string>

using namespace std;

// Task 1: Create my_fav_songs.txt and write 5 favorite songs using ofstream
int main() {
    cout << "=== Task 1: Writing 5 Favorite Songs using ofstream ===" << endl;

    // Open file in write mode
    ofstream outFile("my_fav_songs.txt");

    // Check if file opened successfully
    if (!outFile.is_open()) {
        cout << "Error: Could not create or open 'my_fav_songs.txt'!" << endl;
        return 1;
    }

    // Write 5 favorite songs (one per line)
    outFile << "1. Shape of You - Ed Sheeran" << endl;
    outFile << "2. Believer - Imagine Dragons" << endl;
    outFile << "3. Blinding Lights - The Weeknd" << endl;
    outFile << "4. Perfect - Ed Sheeran" << endl;
    outFile << "5. Someone Like You - Adele" << endl;

    // Close the file stream
    outFile.close();

    cout << "Success: 5 favorite songs have been written to 'my_fav_songs.txt'!" << endl;

    return 0;
}
