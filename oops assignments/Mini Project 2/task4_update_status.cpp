#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <string>

using namespace std;

// Content structure
struct ContentItem {
    string title;
    string platform;
    string views;
    string status;
};

// Function to load all items from file into vector
vector<ContentItem> loadContentList() {
    vector<ContentItem> list;
    ifstream inFile("content_list.txt");
    if (!inFile.is_open()) return list;

    string line;
    while (getline(inFile, line)) {
        if (line.empty()) continue;
        stringstream ss(line);
        ContentItem item;
        if (getline(ss, item.title, '|') &&
            getline(ss, item.platform, '|') &&
            getline(ss, item.views, '|') &&
            getline(ss, item.status)) {
            list.push_back(item);
        }
    }
    inFile.close();
    return list;
}

// Function to save entire vector back to file (overwrite)
void saveContentList(const vector<ContentItem>& list) {
    ofstream outFile("content_list.txt"); // Overwrite mode
    for (size_t i = 0; i < list.size(); i++) {
        outFile << list[i].title << "|"
                << list[i].platform << "|"
                << list[i].views << "|"
                << list[i].status << endl;
    }
    outFile.close();
}

// Display numbered list
void displayNumberedList(const vector<ContentItem>& list) {
    cout << "\n--- Current Content Items ---" << endl;
    for (size_t i = 0; i < list.size(); i++) {
        cout << i + 1 << ". " << list[i].title 
             << " [" << list[i].platform << "] (Current Status: " << list[i].status << ")" << endl;
    }
    cout << "-----------------------------" << endl;
}

// Task 4: Update status by selecting number
void updateContentStatus() {
    vector<ContentItem> list = loadContentList();

    if (list.empty()) {
        cout << "No content ideas found in 'content_list.txt'!" << endl;
        return;
    }

    displayNumberedList(list);

    int choice;
    cout << "\nEnter the item number you want to update (1-" << list.size() << "): ";
    cin >> choice;
    cin.ignore();

    if (choice >= 1 && choice <= (int)list.size()) {
        int index = choice - 1;

        cout << "Selected: \"" << list[index].title << "\"" << endl;
        cout << "Enter New Status (e.g., Draft / In Progress / Published): ";
        string newStatus;
        getline(cin, newStatus);

        // Update status
        list[index].status = newStatus;

        // Save back to file
        saveContentList(list);

        cout << "\n[Success] Status updated and saved to 'content_list.txt'!" << endl;

        // Show updated list
        displayNumberedList(list);
    } else {
        cout << "Error: Invalid selection!" << endl;
    }
}

int main() {
    cout << "=== Mini Project 2 - Task 4: Update Content Status ===" << endl;

    updateContentStatus();

    return 0;
}
