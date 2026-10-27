#include <iostream>
#include <string>

using namespace std;

// Struct representing the parameter object (with keys orderId, restaurantName, isDelivered)
struct OrderData {
    int orderId;
    string restaurantName;
    bool isDelivered;
};

// Task 5: Refactored FoodOrder class where constructor takes an object/struct as a parameter
class FoodOrder {
public:
    int orderId;
    string restaurantName;
    bool isDelivered;

    // Refactored constructor: takes an object (OrderData) instead of separate arguments
    FoodOrder(OrderData data) {
        orderId = data.orderId;
        restaurantName = data.restaurantName;
        isDelivered = data.isDelivered;
    }

    // Member function to mark delivered
    void markDelivered() {
        isDelivered = true;
        cout << "Notification: Order #" << orderId << " from '" << restaurantName << "' delivered successfully!" << endl;
    }

    void displayStatus() const {
        cout << "Order ID    : " << orderId << endl;
        cout << "Restaurant  : " << restaurantName << endl;
        cout << "Delivered   : " << (isDelivered ? "Yes" : "No") << endl;
    }
};

int main() {
    // 1. Create the parameter object with keys: orderId, restaurantName, isDelivered
    OrderData newOrderData = {204, "Dominos Pizza", false};

    // 2. Instantiate FoodOrder using the new constructor signature (passing object)
    cout << "Instantiating FoodOrder using an object parameter..." << endl;
    FoodOrder myOrder(newOrderData);

    cout << "\n--- Order Details ---" << endl;
    myOrder.displayStatus();

    // Calling markDelivered()
    cout << "\nUpdating status..." << endl;
    myOrder.markDelivered();

    cout << "\n--- Updated Order Details ---" << endl;
    myOrder.displayStatus();

    return 0;
}
