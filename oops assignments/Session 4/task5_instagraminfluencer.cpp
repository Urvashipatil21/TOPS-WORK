#include <iostream>
#include <string>

using namespace std;

// Base class (Parent for YouTuber, Podcaster, and InstagramInfluencer)
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
        cout << "Username  : @" << username << " | Followers: " << followers << endl;
    }
};

// Derived Class 1
class YouTuber : public SocialMediaUser {
private:
    string channelName;

public:
    YouTuber(string uName, int fCount, string cName) : SocialMediaUser(uName, fCount), channelName(cName) {}

    void uploadVideo(string title) {
        cout << "[YouTube] Video '" << title << "' uploaded to " << channelName << endl;
    }
};

// Derived Class 2
class Podcaster : public SocialMediaUser {
private:
    string podcastName;

public:
    Podcaster(string uName, int fCount, string pName) : SocialMediaUser(uName, fCount), podcastName(pName) {}

    void publishEpisode(string episodeTitle) {
        cout << "[Podcast] Episode '" << episodeTitle << "' published on " << podcastName << endl;
    }
};

// Task 5: Derived Class 3: InstagramInfluencer (Hierarchical Inheritance)
class InstagramInfluencer : public SocialMediaUser {
public:
    InstagramInfluencer(string uName, int fCount) : SocialMediaUser(uName, fCount) {}

    // Method to post story
    void postStory(string storyTitle) {
        cout << username << " posted a new story: " << storyTitle << endl;
    }
};

int main() {
    cout << "=== Hierarchical Inheritance Demonstration ===" << endl;
    cout << "Parent: SocialMediaUser" << endl;
    cout << "Children: YouTuber, Podcaster, InstagramInfluencer\n" << endl;

    // 1. Instagram Influencer
    cout << "--- 1. Instagram Influencer ---" << endl;
    InstagramInfluencer influencer("fashion_style", 85000);
    influencer.displayProfile();
    influencer.postStory("Morning coffee and OOTD!");

    // 2. YouTuber
    cout << "\n--- 2. YouTuber ---" << endl;
    YouTuber yt("tech_guide", 150000, "TechWorld");
    yt.displayProfile();
    yt.uploadVideo("C++ OOP Crash Course");

    // 3. Podcaster
    cout << "\n--- 3. Podcaster ---" << endl;
    Podcaster pod("mind_talks", 32000, "Daily Insights");
    pod.displayProfile();
    pod.publishEpisode("Episode 5: Power of Habits");

    return 0;
}
