#include <iostream>
#include <string>

using namespace std;

// Task 1: Base class SocialMediaUser
class SocialMediaUser {
protected:
    string username;
    int followers;

public:
    // Constructor
    SocialMediaUser(string uName, int fCount) {
        username = uName;
        followers = fCount;
    }

    // Method to display profile
    void displayProfile() const {
        cout << "Username       : @" << username << endl;
        cout << "Follower Count : " << followers << endl;
    }
};

int main() {
    cout << "--- Social Media User Profile ---" << endl;
    SocialMediaUser user("tech_guru", 15000);
    user.displayProfile();

    return 0;
}
