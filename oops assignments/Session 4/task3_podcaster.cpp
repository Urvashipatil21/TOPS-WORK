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

// Task 3: Podcaster class inheriting from SocialMediaUser
class Podcaster : public SocialMediaUser {
private:
    string podcastName;

public:
    // Constructor calling base class constructor
    Podcaster(string uName, int fCount, string pName) : SocialMediaUser(uName, fCount) {
        podcastName = pName;
    }

    // Method to publish an episode
    void publishEpisode(string episodeTitle) {
        cout << "Episode '" << episodeTitle << "' published on " << podcastName << endl;
    }

    void showDetails() const {
        displayProfile();
        cout << "Podcast    : " << podcastName << endl;
    }
};

int main() {
    cout << "--- Podcaster Profile & Action ---" << endl;
    Podcaster pod("daily_talks", 25000, "The Developer Chai Podcast");
    pod.showDetails();

    cout << "\nPublishing Episode:" << endl;
    pod.publishEpisode("Episode #12: Why OOP is Awesome");

    return 0;
}
