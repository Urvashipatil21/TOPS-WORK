#include <iostream>
#include <fstream>
#include <string>

using namespace std;

// Task 5: Count total Instagram followers listed in insta_followers.txt
// Constraint: Do not use any array or vector to store the names—just count as you read.
int main() {
    cout << "=== Task 5: Count Instagram Followers from File ===" << endl;
    cout << "[Constraint Respected: No arrays or vectors used]\n" << endl;

    // Open insta_followers.txt
    ifstream inFile("insta_followers.txt");

    if (!inFile.is_open()) {
        cout << "Error: Could not open 'insta_followers.txt'!" << endl;
        cout << "Please ensure 'insta_followers.txt' is placed in this folder." << endl;
        return 1;
    }

    string username;
    int followerCount = 0; // Simple integer counter

    cout << "Reading followers list..." << endl;

    // Read line-by-line and increment counter directly on the fly
    while (getline(inFile, username)) {
        if (!username.empty()) {
            followerCount++;
            cout << "Found follower #" << followerCount << ": @" << username << endl;
        }
    }

    inFile.close();

    // Display final count
    cout << "\n========================================" << endl;
    cout << "Total Number of Followers: " << followerCount << endl;
    cout << "========================================" << endl;

    return 0;
}
