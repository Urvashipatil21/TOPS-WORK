#include <iostream>
#include <string>

using namespace std;

// Base class: InstaStory with protected property storyViews
class InstaStory {
protected:
    int storyViews; // accessible within this class and its derived classes

public:
    InstaStory(int views) {
        storyViews = views;
    }
};

// Subclass: SponsoredStory inherits from InstaStory
class SponsoredStory : public InstaStory {
private:
    string brandName;

public:
    SponsoredStory(int views, string brand) : InstaStory(views) {
        brandName = brand;
    }

    // Subclass method directly accessing protected member storyViews
    void displayStoryAnalytics() const {
        cout << "--- Sponsored Story Performance ---" << endl;
        cout << "Brand Partner : " << brandName << endl;
        cout << "Total Views   : " << storyViews << " impressions" << endl;
        cout << "-----------------------------------" << endl;
    }
};

int main() {
    cout << "=== Protected Access Modifier Demonstration ===" << endl;

    // Create a SponsoredStory object
    SponsoredStory myStory(45000, "Puma");

    // Display views accessed directly inside the subclass
    myStory.displayStoryAnalytics();

    return 0;
}
