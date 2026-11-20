
#include <stdio.h>

int main() {
    char t;
    int h, f;

    printf("Enter vehicle type (T/F): ");
    scanf(" %c", &t);

    printf("Enter parked hours: ");
    scanf("%d", &h);

    if (h < 1) {
        printf("Error: Hours must be at least 1.\n");
    }
    else if (t == 'T' || t == 't') {
        f = h * 20;
        printf("Parking Fee: Rs. %d\n", f);
    }
    else if (t == 'F' || t == 'f') {
        f = h * 10;
        printf("Parking Fee: Rs. %d\n", f);
    }
    else {
        printf("Error: Invalid vehicle type.\n");
    }

    return 0;
}
