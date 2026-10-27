#include <iostream>
#include <string>

using namespace std;

// Base class (Level 1)
class SocialMediaUser {
protected:
    string username;
    int followers;

public:
    SocialMediaUser(string uName, int fCount) {
        username = uName;
        followers = fCount;
    }

    void displayProfile() const {
        cout << "Username   : @" << username << endl;
        cout << "Followers  : " << followers << endl;
    }
};

// Intermediate derived class (Level 2)
class YouTuber : public SocialMediaUser {
protected:
    string channelName;

public:
    YouTuber(string uName, int fCount, string cName) : SocialMediaUser(uName, fCount) {
        channelName = cName;
    }

    void uploadVideo(string title) {
        cout << "Video '" << title << "' uploaded to " << channelName << endl;
    }
};

// Task 4: Multilevel Inheritance: GamingYouTuber inherits from YouTuber (Level 3)
class GamingYouTuber : public YouTuber {
public:
    GamingYouTuber(string uName, int fCount, string cName) : YouTuber(uName, fCount, cName) {}

    // Method using username from base class and channelName from parent class
    void streamGame(string gameName) {
        cout << username << " is now streaming " << gameName << " on " << channelName << endl;
    }
};

int main() {
    cout << "=== Multilevel Inheritance Demonstration ===" << endl;
    cout << "(SocialMediaUser -> YouTuber -> GamingYouTuber)\n" << endl;

    // Creating object of bottom-most derived class
    GamingYouTuber gamer("pro_player", 120000, "GameZone Live");

    // Display profile (inherited from Level 1: SocialMediaUser)
    cout << "Profile Details:" << endl;
    gamer.displayProfile();

    // Upload video (inherited from Level 2: YouTuber)
    cout << "\nAction 1 (from YouTuber):" << endl;
    gamer.uploadVideo("Top 10 Epic Gaming Moments");

    // Stream game (defined in Level 3: GamingYouTuber)
    cout << "\nAction 2 (from GamingYouTuber):" << endl;
    gamer.streamGame("Minecraft");

    return 0;
}
