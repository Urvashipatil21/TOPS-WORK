#include <iostream>
#include <string>

using namespace std;

// Base class
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

// Task 2: YouTuber class inheriting from SocialMediaUser (Single Inheritance)
class YouTuber : public SocialMediaUser {
protected:
    string channelName;

public:
    // Constructor calling base class constructor
    YouTuber(string uName, int fCount, string cName) : SocialMediaUser(uName, fCount) {
        channelName = cName;
    }

    // Method to upload a video
    void uploadVideo(string title) {
        cout << "Video '" << title << "' uploaded to " << channelName << endl;
    }

    void showDetails() const {
        displayProfile();
        cout << "Channel    : " << channelName << endl;
    }
};

int main() {
    cout << "--- YouTuber Profile & Action ---" << endl;
    YouTuber yt("code_master", 50000, "Code With Me");
    yt.showDetails();

    cout << "\nUploading Video:" << endl;
    yt.uploadVideo("C++ Inheritance Tutorial for Beginners");

    return 0;
}
