#include <iostream>
#include <fstream>
#include <string>

using namespace std;

// Task 4: Flipkart-style Wishlist Tracker
// Enters 3 product names & prices, saves to wishlist.txt, then reads and displays them.
int main() {
    cout << "=== Task 4: Flipkart Wishlist Tracker ===" << endl;

    // Part 1: Writing 3 products to wishlist.txt
    ofstream outFile("wishlist.txt");
    if (!outFile.is_open()) {
        cout << "Error: Could not create 'wishlist.txt'!" << endl;
        return 1;
    }

    cout << "\nPlease enter 3 products for your wishlist:\n" << endl;
    for (int i = 1; i <= 3; i++) {
        string productName;
        double price;

        cout << "Enter Product #" << i << " Name: ";
        getline(cin, productName);

        cout << "Enter Product #" << i << " Price (Rs.): ";
        cin >> price;
        cin.ignore(); // Flush newline from buffer

        // Write to wishlist.txt
        outFile << productName << " - Rs. " << price << endl;
        cout << endl;
    }
    outFile.close();

    cout << "Success: 3 products saved to 'wishlist.txt'!\n" << endl;

    // Part 2: Reading from wishlist.txt and displaying
    cout << "--- Reading Saved Wishlist from 'wishlist.txt' ---" << endl;
    ifstream inFile("wishlist.txt");
    if (!inFile.is_open()) {
        cout << "Error opening 'wishlist.txt' for reading!" << endl;
        return 1;
    }

    string item;
    int itemNumber = 1;
    while (getline(inFile, item)) {
        cout << itemNumber++ << ". " << item << endl;
    }
    inFile.close();

    cout << "--------------------------------------------------" << endl;

    return 0;
}
