#include <iostream>
#include <string>

using namespace std;

// Task 3: Create FoodOrder class with properties orderId, restaurantName, and isDelivered
class FoodOrder {
public:
    int orderId;
    string restaurantName;
    bool isDelivered;

    // Constructor taking separate arguments
    FoodOrder(int id, string rName, bool delivered) {
        orderId = id;
        restaurantName = rName;
        isDelivered = delivered;
    }

    // Member function to mark order as delivered and print a message
    void markDelivered() {
        isDelivered = true;
        cout << "Success: Order #" << orderId << " from '" << restaurantName << "' is now marked as DELIVERED!" << endl;
    }

    void displayStatus() const {
        cout << "Order ID    : " << orderId << endl;
        cout << "Restaurant  : " << restaurantName << endl;
        cout << "Delivered   : " << (isDelivered ? "Yes" : "No") << endl;
    }
};

int main() {
    // Instantiate FoodOrder with isDelivered = false
    FoodOrder myOrder(101, "Burger King", false);

    cout << "--- Initial Order Status ---" << endl;
    myOrder.displayStatus();

    // Call markDelivered()
    cout << "\nUpdating order status..." << endl;
    myOrder.markDelivered();

    cout << "\n--- Final Order Status ---" << endl;
    myOrder.displayStatus();

    return 0;
}
