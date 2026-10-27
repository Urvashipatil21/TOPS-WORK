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

// Function to load all items from content_list.txt
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

// Function to save vector back to content_list.txt
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
             << " [" << list[i].platform << "] (" << list[i].status << ")" << endl;
    }
    cout << "-----------------------------" << endl;
}

// Task 5: Delete a content item by its number from the list
void deleteContentItem() {
    vector<ContentItem> list = loadContentList();

    if (list.empty()) {
        cout << "No content ideas found in 'content_list.txt' to delete!" << endl;
        return;
    }

    displayNumberedList(list);

    int choice;
    cout << "\nEnter the item number you want to DELETE (1-" << list.size() << "): ";
    cin >> choice;
    cin.ignore();

    if (choice >= 1 && choice <= (int)list.size()) {
        int index = choice - 1;
        string deletedTitle = list[index].title;

        // Remove item from vector
        list.erase(list.begin() + index);

        // Update file accordingly
        saveContentList(list);

        cout << "\n[Deleted] \"" << deletedTitle << "\" has been removed from 'content_list.txt'!" << endl;

        // Display updated list to confirm deletion
        cout << "\n--- Updated Content List After Deletion ---" << endl;
        if (list.empty()) {
            cout << "(All content items have been deleted. List is now empty.)" << endl;
        } else {
            for (size_t i = 0; i < list.size(); i++) {
                cout << i + 1 << ". " << list[i].title << " [" << list[i].platform << "]" << endl;
            }
        }
        cout << "------------------------------------------" << endl;

    } else {
        cout << "Error: Invalid item number!" << endl;
    }
}

int main() {
    cout << "=== Mini Project 2 - Task 5: Delete Content Item ===" << endl;

    deleteContentItem();

    return 0;
}
