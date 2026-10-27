#include <iostream>
#include <string>

using namespace std;

// Task 1: Content class with properties title, platform, views, and status
class Content {
public:
    string title;
    string platform;
    int views;
    string status; // e.g. "Draft", "In Progress", "Published"

    // Constructor
    Content(string t, string p, int v, string s) {
        title = t;
        platform = p;
        views = v;
        status = s;
    }

    // Method to display all details of the content
    void displayDetails() const {
        cout << "----------------------------------------" << endl;
        cout << "Title    : " << title << endl;
        cout << "Platform : " << platform << endl;
        cout << "Views    : " << views << endl;
        cout << "Status   : " << status << endl;
        cout << "----------------------------------------" << endl;
    }
};

int main() {
    cout << "=== Mini Project 2 - Task 1: Content Class Demo ===" << endl;

    // Creating sample Content object
    Content myPost("Top 10 VS Code Extensions", "YouTube", 12500, "Published");

    // Displaying all details
    myPost.displayDetails();

    return 0;
}
