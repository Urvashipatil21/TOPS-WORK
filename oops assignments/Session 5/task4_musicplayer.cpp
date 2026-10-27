#include <iostream>
#include <string>

using namespace std;

// Base class
class MusicPlayer {
public:
    // Virtual function enables Dynamic Method Dispatch (Runtime Polymorphism) in C++
    virtual void play(string song) {
        cout << "Playing: " << song << endl;
    }

    virtual ~MusicPlayer() {}
};

// Derived class overriding play()
class SpotifyPlayer : public MusicPlayer {
public:
    void play(string song) override {
        cout << "Streaming on Spotify: " << song << endl;
    }
};

int main() {
    cout << "=== Runtime Polymorphism & Dynamic Method Dispatch ===" << endl;

    // Requirement:
    // Create an object reference/pointer of type MusicPlayer
    // but assign it a SpotifyPlayer instance:
    MusicPlayer* player = new SpotifyPlayer();

    // Calling play() through base type pointer
    cout << "\nOutput of player->play(\"Blinding Lights\"):" << endl;
    player->play("Blinding Lights");

    // Explanation of the output:
    cout << "\n-----------------------------------------------------------" << endl;
    cout << "EXPLANATION OF THE OUTPUT:" << endl;
    cout << "1. The output printed is: \"Streaming on Spotify: Blinding Lights\"" << endl;
    cout << "   (NOT the base class output \"Playing: Blinding Lights\")." << endl;
    cout << "2. Why? Even though the pointer/reference type is 'MusicPlayer'," << endl;
    cout << "   the actual object created in memory is of type 'SpotifyPlayer'." << endl;
    cout << "3. Due to Dynamic Method Dispatch (Runtime Polymorphism / vtable)," << endl;
    cout << "   the function call is resolved at runtime based on the actual" << endl;
    cout << "   type of the object, not the type of the reference/pointer." << endl;
    cout << "4. Hence, the overridden version in SpotifyPlayer gets executed." << endl;
    cout << "-----------------------------------------------------------" << endl;

    delete player;
    return 0;
}
