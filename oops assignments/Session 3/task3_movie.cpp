#include <iostream>
#include <string>

using namespace std;

// Task 3: Class Movie with parameterized constructor and copy constructor
class Movie {
private:
    string title;
    string genre;
    double durationHours;

public:
    // Parameterized constructor
    Movie(string t, string g, double d) {
        title = t;
        genre = g;
        durationHours = d;
    }

    // Copy constructor to duplicate a Movie object
    Movie(const Movie &other) {
        title = other.title;
        genre = other.genre;
        durationHours = other.durationHours;
        cout << "[Note: Copy constructor invoked to duplicate movie]" << endl;
    }

    // Display movie details
    void display(string label) const {
        cout << "\n--- " << label << " ---" << endl;
        cout << "Title    : " << title << endl;
        cout << "Genre    : " << genre << endl;
        cout << "Duration : " << durationHours << " hours" << endl;
    }
};

int main() {
    // 1. Create original movie object using parameterized constructor
    Movie originalMovie("Inception", "Sci-Fi / Action", 2.5);

    // 2. Duplicate using copy constructor
    Movie copiedMovie = originalMovie;

    // 3. Print both original and copied movie details to show they are identical
    originalMovie.display("Original Movie");
    copiedMovie.display("Copied Movie");

    return 0;
}
