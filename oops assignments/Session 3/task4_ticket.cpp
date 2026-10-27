#include <iostream>
#include <string>

using namespace std;

// Task 4: Simulate BookMyShow Ticket booking with destructor lifecycle
class Ticket {
private:
    string movieName;
    string seatNumber;

public:
    // Constructor
    Ticket(string mName, string seat) {
        movieName = mName;
        seatNumber = seat;
        cout << "Ticket booked successfully for '" << movieName << "' at seat " << seatNumber << "!" << endl;
    }

    // Destructor (Hint: ~Ticket() in C++)
    ~Ticket() {
        cout << "Saving your ticket..." << endl;
    }

    void showDetails() const {
        cout << "Viewing Ticket -> Movie: " << movieName << " | Seat: " << seatNumber << endl;
    }
};

int main() {
    cout << "=== BookMyShow Ticket Simulation ===" << endl;

    cout << "\nStep 1: Creating ticket dynamically using 'new'..." << endl;
    // Create Ticket object dynamically
    Ticket* myTicket = new Ticket("Avengers: Endgame", "A-12");

    // Display ticket
    myTicket->showDetails();

    cout << "\nStep 2: Deleting ticket using 'delete' to demonstrate destructor lifecycle..." << endl;
    // Delete Ticket object - this immediately triggers the destructor ~Ticket()
    delete myTicket;

    cout << "\nTicket booking session ended." << endl;
    return 0;
}
