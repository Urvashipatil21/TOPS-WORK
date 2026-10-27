#include <iostream>
#include <string>

using namespace std;

// Abstract Base Class: Product
class Product {
protected:
    string productName;
    double price;

public:
    Product(string name, double p) {
        productName = name;
        price = p;
    }

    // Pure virtual function -> Makes Product an Abstract Class in C++
    virtual void upload() = 0;

    virtual ~Product() {}
};

// Subclass 1: Electronics implements upload()
class Electronics : public Product {
private:
    int warrantyMonths;

public:
    Electronics(string name, double p, int warranty) : Product(name, p) {
        warrantyMonths = warranty;
    }

    // Implementation of pure virtual method
    void upload() override {
        cout << "[Flipkart - Electronics Upload]" << endl;
        cout << "Item Name : " << productName << " | Price: Rs. " << price << endl;
        cout << "Details   : Validated IMEI/Serial No., added " << warrantyMonths << " months brand warranty." << endl;
    }
};

// Subclass 2: Clothing implements upload()
class Clothing : public Product {
private:
    string size;

public:
    Clothing(string name, double p, string s) : Product(name, p) {
        size = s;
    }

    // Implementation of pure virtual method
    void upload() override {
        cout << "[Flipkart - Clothing Upload]" << endl;
        cout << "Item Name : " << productName << " | Price: Rs. " << price << endl;
        cout << "Details   : Size tag '" << size << "' verified, fabric care instructions & color variants added." << endl;
    }
};

int main() {
    cout << "=== Abstract Class & Pure Virtual Function Demonstration ===\n" << endl;

    // We cannot instantiate the abstract class Product directly:
    // Product p("Generic", 100); // Compile Error!

    // Using base class pointers to call implemented upload() methods
    Product* p1 = new Electronics("Sony Wireless Headphones", 14999.00, 12);
    Product* p2 = new Clothing("Men Cotton Slim Shirt", 1299.00, "L");

    p1->upload();
    cout << endl;
    p2->upload();

    // Clean up
    delete p1;
    delete p2;

    return 0;
}
