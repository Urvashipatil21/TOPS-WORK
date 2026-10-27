#include <iostream>
#include <string>

using namespace std;

// Task 3: Flipkart-style search using method overloading
class FlipkartSearch {
public:
    // Overloaded method 1: Search by product name only
    void searchProduct(string productName) {
        cout << "\n[Search Option 1: By Product Name Only]" << endl;
        cout << "Keyword: \"" << productName << "\"" << endl;
        cout << "Searching across all departments..." << endl;
        cout << "Results: Found 1,240 items matching '" << productName << "'." << endl;
    }

    // Overloaded method 2: Search by product name AND category
    void searchProduct(string productName, string category) {
        cout << "\n[Search Option 2: By Product Name & Category Filter]" << endl;
        cout << "Keyword : \"" << productName << "\"" << endl;
        cout << "Category: \"" << category << "\"" << endl;
        cout << "Filtered Search in progress..." << endl;
        cout << "Results: Found 42 items matching '" << productName << "' in '" << category << "'." << endl;
    }
};

int main() {
    FlipkartSearch flipkart;

    cout << "=== Flipkart Product Search Engine (Method Overloading) ===" << endl;

    // 1. Searching by product name
    flipkart.searchProduct("Wireless Earbuds");

    // 2. Searching by product name and category
    flipkart.searchProduct("Wireless Earbuds", "Electronics & Audio");

    return 0;
}
