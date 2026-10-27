#include <iostream>
#include <fstream>
#include <string>

using namespace std;

// Content class
class Content {
public:
    string title;
    string platform;
    int views;
    string status;

    Content(string t, string p, int v, string s) {
        title = t;
        platform = p;
        views = v;
        status = s;
    }
};

// Function to add and append content to content_list.txt
void addContentItem() {
    string title, platform, status;
    int views;

    cout << "\n--- Add New Content Idea ---" << endl;
    cout << "Enter Content Title    : ";
    getline(cin, title);

    cout << "Enter Platform (YouTube/Instagram/LinkedIn): ";
    getline(cin, platform);

    cout << "Enter Expected/Current Views: ";
    cin >> views;
    cin.ignore(); // Flush newline from buffer

    cout << "Enter Status (Draft / In Progress / Published): ";
    getline(cin, status);

    Content item(title, platform, views, status);

    // Open file in append mode (ios::app)
    ofstream outFile("content_list.txt", ios::app);
    if (!outFile.is_open()) {
        cout << "Error: Could not open 'content_list.txt' for writing!" << endl;
        return;
    }

    // Save formatted line: Title|Platform|Views|Status
    outFile << item.title << "|" << item.platform << "|" << item.views << "|" << item.status << endl;
    outFile.close();

    cout << "\n[Success] Content idea saved to 'content_list.txt' successfully!" << endl;
}

int main() {
    cout << "=== Mini Project 2 - Task 2: Add Content Idea ===" << endl;

    char choice;
    do {
        addContentItem();

        cout << "\nDo you want to add another item? (y/n): ";
        cin >> choice;
        cin.ignore();
    } while (choice == 'y' || choice == 'Y');

    cout << "\nExiting Add Content menu. Check 'content_list.txt' to see saved data." << endl;
    return 0;
}
