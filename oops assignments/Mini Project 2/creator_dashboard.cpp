#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <string>

using namespace std;

// ============================================================
// Mini Project 2: Creator Dashboard Lite
// ============================================================

// Task 1: Content Class
class Content {
public:
    string title;
    string platform;
    int views;
    string status;

    Content() : views(0) {}

    Content(string t, string p, int v, string s) {
        title = t;
        platform = p;
        views = v;
        status = s;
    }

    void displayDetails(int index) const {
        cout << index << ". Title    : " << title << endl;
        cout << "   Platform : " << platform << endl;
        cout << "   Views    : " << views << endl;
        cout << "   Status   : " << status << endl;
        cout << "   ----------------------------------------" << endl;
    }
};

// Helper: Load all content items from file
vector<Content> loadAllContent() {
    vector<Content> list;
    ifstream inFile("content_list.txt");
    if (!inFile.is_open()) return list;

    string line;
    while (getline(inFile, line)) {
        if (line.empty()) continue;
        stringstream ss(line);
        string t, p, vStr, s;
        if (getline(ss, t, '|') &&
            getline(ss, p, '|') &&
            getline(ss, vStr, '|') &&
            getline(ss, s)) {
            int v = 0;
            try { v = stoi(vStr); } catch (...) { v = 0; }
            list.push_back(Content(t, p, v, s));
        }
    }
    inFile.close();
    return list;
}

// Helper: Save all content items to file
void saveAllContent(const vector<Content>& list) {
    ofstream outFile("content_list.txt");
    for (size_t i = 0; i < list.size(); i++) {
        outFile << list[i].title << "|"
                << list[i].platform << "|"
                << list[i].views << "|"
                << list[i].status << endl;
    }
    outFile.close();
}

// Task 2: Add Content Item
void addContent() {
    string title, platform, status;
    int views;

    cout << "\n--- [1] Add New Content Idea ---" << endl;
    cout << "Enter Title    : ";
    getline(cin, title);

    cout << "Enter Platform (YouTube/Instagram/LinkedIn): ";
    getline(cin, platform);

    cout << "Enter Views    : ";
    cin >> views;
    cin.ignore();

    cout << "Enter Status (Draft / In Progress / Published): ";
    getline(cin, status);

    // Append to file
    ofstream outFile("content_list.txt", ios::app);
    if (outFile.is_open()) {
        outFile << title << "|" << platform << "|" << views << "|" << status << endl;
        outFile.close();
        cout << "\n[Success] Content idea saved to 'content_list.txt'!\n" << endl;
    } else {
        cout << "Error: Could not open file for writing.\n" << endl;
    }
}

// Task 3: View All Content Items (Numbered List)
void viewContent() {
    vector<Content> list = loadAllContent();
    cout << "\n========================================================" << endl;
    cout << "              CREATOR DASHBOARD - CONTENT LIST          " << endl;
    cout << "========================================================" << endl;

    if (list.empty()) {
        cout << "(No content ideas found in 'content_list.txt')" << endl;
        cout << "========================================================\n" << endl;
        return;
    }

    for (size_t i = 0; i < list.size(); i++) {
        cout << i + 1 << ". " << list[i].title << "  [" << list[i].platform << "]"
             << " - Status: " << list[i].status 
             << " (" << list[i].views << " views)" << endl;
    }
    cout << "========================================================\n" << endl;
}

// Task 4: Update Status
void updateStatus() {
    vector<Content> list = loadAllContent();
    if (list.empty()) {
        cout << "\nNo content ideas available to update!\n" << endl;
        return;
    }

    viewContent();

    int choice;
    cout << "Select item number to update status (1-" << list.size() << "): ";
    cin >> choice;
    cin.ignore();

    if (choice >= 1 && choice <= (int)list.size()) {
        int index = choice - 1;
        cout << "Updating status for: \"" << list[index].title << "\"" << endl;
        cout << "Enter New Status: ";
        string newStatus;
        getline(cin, newStatus);

        list[index].status = newStatus;
        saveAllContent(list);

        cout << "\n[Success] Status updated successfully!\n" << endl;
    } else {
        cout << "Error: Invalid number selected!\n" << endl;
    }
}

// Task 5: Delete Content Item
void deleteContent() {
    vector<Content> list = loadAllContent();
    if (list.empty()) {
        cout << "\nNo content ideas available to delete!\n" << endl;
        return;
    }

    viewContent();

    int choice;
    cout << "Select item number to DELETE (1-" << list.size() << "): ";
    cin >> choice;
    cin.ignore();

    if (choice >= 1 && choice <= (int)list.size()) {
        int index = choice - 1;
        string removedTitle = list[index].title;

        list.erase(list.begin() + index);
        saveAllContent(list);

        cout << "\n[Success] \"" << removedTitle << "\" deleted successfully!" << endl;
        cout << "Here is the updated list:" << endl;
        viewContent();
    } else {
        cout << "Error: Invalid number selected!\n" << endl;
    }
}

int main() {
    int choice = 0;

    do {
        cout << "========================================" << endl;
        cout << "       CREATOR DASHBOARD LITE           " << endl;
        cout << "========================================" << endl;
        cout << "1. Add New Content Idea" << endl;
        cout << "2. View All Content Ideas" << endl;
        cout << "3. Update Content Status" << endl;
        cout << "4. Delete a Content Item" << endl;
        cout << "5. Exit Dashboard" << endl;
        cout << "========================================" << endl;
        cout << "Enter your choice (1-5): ";
        cin >> choice;
        cin.ignore();

        switch (choice) {
            case 1:
                addContent();
                break;
            case 2:
                viewContent();
                break;
            case 3:
                updateStatus();
                break;
            case 4:
                deleteContent();
                break;
            case 5:
                cout << "\nThank you for using Creator Dashboard Lite! Goodbye." << endl;
                break;
            default:
                cout << "\nInvalid choice! Please choose between 1 and 5.\n" << endl;
        }

    } while (choice != 5);

    return 0;
}
