#include <iostream>
#include <string>

using namespace std;

// Task 2: Class Product for Flipkart-style app with a parameterized constructor
class Product {
private:
    string productName;
    double price;
    double rating;

public:
    // Parameterized constructor
    Product(string pName, double pPrice, double pRating) {
        productName = pName;
        price = pPrice;
        rating = pRating;
    }

    // Method to display all product information
    void displayInfo() const {
        cout << "\n--- Flipkart Product Details ---" << endl;
        cout << "Product Name : " << productName << endl;
        cout << "Price        : Rs. " << price << endl;
        cout << "Rating       : " << rating << " / 5.0 Stars" << endl;
        cout << "--------------------------------" << endl;
    }
};

int main() {
    // Instantiating Product using parameterized constructor
    Product item1("Wireless Bluetooth Headphones", 1499.00, 4.3);
    Product item2("Smart Fitness Watch", 2999.00, 4.6);

    // Displaying details
    item1.displayInfo();
    item2.displayInfo();

    return 0;
}
