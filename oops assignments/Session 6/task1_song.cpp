#include <iostream>
#include <string>

using namespace std;

// Task 1: Class Song with private properties and public getters/setters
class Song {
private:
    string title;
    string artist;

public:
    // Constructor
    Song(string t, string a) {
        title = t;
        artist = a;
    }

    // Getter for title
    string getTitle() const {
        return title;
    }

    // Setter for title
    void setTitle(string newTitle) {
        title = newTitle;
    }

    // Getter for artist
    string getArtist() const {
        return artist;
    }

    // Setter for artist
    void setArtist(string newArtist) {
        artist = newArtist;
    }

    void display() const {
        cout << "Title  : " << title << endl;
        cout << "Artist : " << artist << endl;
    }
};

int main() {
    cout << "=== Song Details (Encapsulation via Getters & Setters) ===" << endl;

    // 1. Create a Song object
    Song mySong("Shape of You", "Ed Sheeran");

    cout << "\nInitial Song Details:" << endl;
    mySong.display();

    // 2. Update its title using the setter method
    cout << "\nUpdating title using setTitle()..." << endl;
    mySong.setTitle("Bad Habits");

    // 3. Access updated title using getter method
    cout << "Updated Title (retrieved using getTitle()): " << mySong.getTitle() << endl;

    cout << "\nFinal Song Details:" << endl;
    mySong.display();

    return 0;
}
