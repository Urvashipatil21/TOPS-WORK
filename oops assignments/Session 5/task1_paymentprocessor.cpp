#include <iostream>
#include <string>

using namespace std;

// Task 1: Compile-time Polymorphism using Method Overloading
class PaymentProcessor {
public:
    // Overloaded method 1: takes only amount
    void processPayment(double amount) {
        cout << "[Version 1: Standard Payment]" << endl;
        cout << "Processing payment without any coupon..." << endl;
        cout << "Final Amount to Pay: Rs. " << amount << endl;
    }

    // Overloaded method 2: takes amount and coupon code
    void processPayment(double amount, string couponCode) {
        cout << "[Version 2: Discounted Payment with Coupon]" << endl;
        cout << "Applying coupon code: " << couponCode << endl;

        double discount = 0.0;
        if (couponCode == "SAVE10") {
            discount = amount * 0.10; // 10% discount
        } else if (couponCode == "FLAT50") {
            discount = 50.0; // Flat 50 off
        } else {
            cout << "Notice: Invalid coupon code. No discount applied." << endl;
        }

        double finalAmount = amount - discount;
        if (finalAmount < 0) finalAmount = 0;

        cout << "Original Amount    : Rs. " << amount << endl;
        cout << "Discount Amount    : Rs. " << discount << endl;
        cout << "Final Amount to Pay: Rs. " << finalAmount << endl;
    }
};

int main() {
    PaymentProcessor processor;

    cout << "=== Demonstration of Overloaded processPayment() ===\n" << endl;

    // Call Version 1 (amount only)
    cout << "--- Transaction 1 ---" << endl;
    processor.processPayment(1000.0);

    // Call Version 2 (amount + coupon)
    cout << "\n--- Transaction 2 ---" << endl;
    processor.processPayment(1000.0, "SAVE10");

    return 0;
}
