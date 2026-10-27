#include <iostream>
#include <string>

using namespace std;

// Base class
class SocialMediaUploader {
public:
    // Virtual method to enable runtime polymorphism (method overriding)
    virtual void uploadContent() {
        cout << "Uploading content to a generic social media platform..." << endl;
    }

    virtual ~SocialMediaUploader() {} // Virtual destructor for safe cleanup
};

// Derived Class 1: InstagramUploader overrides uploadContent()
class InstagramUploader : public SocialMediaUploader {
public:
    void uploadContent() override {
        cout << "[Instagram Upload]" << endl;
        cout << "-> Uploading 9:16 vertical Reel / Square photo with filters, music, and #hashtags." << endl;
    }
};

// Derived Class 2: YouTubeUploader overrides uploadContent()
class YouTubeUploader : public SocialMediaUploader {
public:
    void uploadContent() override {
        cout << "[YouTube Upload]" << endl;
        cout << "-> Uploading 16:9 4K landscape video with custom thumbnail, title, tags, and monetization." << endl;
    }
};

int main() {
    cout << "=== Runtime Polymorphism: Social Media Uploader ===" << endl;
    cout << "Demonstrating how uploadContent() behaves differently for Instagram and YouTube.\n" << endl;

    // Base class pointer pointing to InstagramUploader object
    SocialMediaUploader* uploader1 = new InstagramUploader();
    uploader1->uploadContent();

    cout << endl;

    // Base class pointer pointing to YouTubeUploader object
    SocialMediaUploader* uploader2 = new YouTubeUploader();
    uploader2->uploadContent();

    // Clean up dynamic memory
    delete uploader1;
    delete uploader2;

    return 0;
}
