#include <iostream>
#include <string>

using namespace std;

// Task 4: Refactored UserProfile class with private phoneNumber
class UserProfile {
private:
    string username;
    string phoneNumber; // Private access modifier ensures phone number is protected

public:
    // Constructor
    UserProfile(string uName, string phone) {
        username = uName;
        phoneNumber = phone;
    }

    // Public Getter method to retrieve phone number
    string getPhoneNumber() const {
        return phoneNumber;
    }

    // Public Setter method to safely update phone number
    void setPhoneNumber(string newPhone) {
        // Validation check for 10-digit number
        if (newPhone.length() == 10) {
            phoneNumber = newPhone;
            cout << "Success: Phone number updated to " << phoneNumber << endl;
        } else {
            cout << "Error: Invalid phone number length. Must be 10 digits!" << endl;
        }
    }

    void displayProfile() const {
        cout << "Username     : " << username << endl;
        cout << "Phone Number : " << phoneNumber << endl;
    }
};

int main() {
    cout << "=== Encapsulation: Refactored UserProfile ===" << endl;

    // Create user profile
    UserProfile user("nik_parmar", "9876543210");
    user.displayProfile();

    // Trying direct access:
    // user.phoneNumber = "9999999999"; // ERROR: 'phoneNumber' is private

    // Updating phone number safely via public setter
    cout << "\n1. Updating phone number via setPhoneNumber():" << endl;
    user.setPhoneNumber("9123456789");

    // Retrieving phone number via public getter
    cout << "\n2. Retrieving phone number via getPhoneNumber():" << endl;
    cout << "User's current phone: " << user.getPhoneNumber() << endl;

    cout << "\nFinal Profile:" << endl;
    user.displayProfile();

    return 0;
}
