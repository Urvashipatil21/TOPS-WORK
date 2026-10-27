#include <iostream>
#include <fstream>
#include <sstream>
#include <string>

using namespace std;

// Task 3: Read all content items from content_list.txt and display in a numbered list
void viewAllContent() {
    ifstream inFile("content_list.txt");

    if (!inFile.is_open()) {
        cout << "Error: Could not open 'content_list.txt'!" << endl;
        cout << "Please add some content ideas first." << endl;
        return;
    }

    cout << "\n========================================================" << endl;
    cout << "           CREATOR DASHBOARD - CONTENT LIST             " << endl;
    cout << "========================================================" << endl;

    string line;
    int count = 0;

    // Read file line by line
    while (getline(inFile, line)) {
        if (line.empty()) continue;

        stringstream ss(line);
        string title, platform, viewsStr, status;

        // Parse pipe-separated values: Title|Platform|Views|Status
        if (getline(ss, title, '|') &&
            getline(ss, platform, '|') &&
            getline(ss, viewsStr, '|') &&
            getline(ss, status)) {

            count++;
            // Requirement: Numbered list showing title and platform for each
            cout << count << ". " << title << "  [" << platform << "] - (" << status << ", " << viewsStr << " views)" << endl;
        }
    }

    inFile.close();

    if (count == 0) {
        cout << "No content ideas found in 'content_list.txt'." << endl;
    } else {
        cout << "--------------------------------------------------------" << endl;
        cout << "Total Content Items: " << count << endl;
    }
}

int main() {
    cout << "=== Mini Project 2 - Task 3: View All Content Items ===" << endl;

    viewAllContent();

    return 0;
}
