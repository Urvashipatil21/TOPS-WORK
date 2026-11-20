


#include <stdio.h>

int main() {
    // Declare variables
    char vehicleType;
    int parkedHours;
    int parkingFee;

    // Get vehicle type from user
    printf("Enter vehicle type (T/F): ");
    scanf(" %c", &vehicleType);

    // Get parking hours from user
    printf("Enter parked hours: ");
    scanf("%d", &parkedHours);

    // Check parking hours
    if (parkedHours < 1) {
        printf("Error: Hours must be at least 1.\n");
    }

    // Calculate parking fee
    else if (vehicleType == 'T' || vehicleType == 't') {
        parkingFee = parkedHours * 20;
        printf("Parking Fee: Rs. %d\n", parkingFee);
    }
    else if (vehicleType == 'F' || vehicleType == 'f') {
        parkingFee = parkedHours * 10;
        printf("Parking Fee: Rs. %d\n", parkingFee);
    }

    // Handle invalid vehicle type
    else {
        printf("Error: Invalid vehicle type.\n");
    }

    return 0;
}
