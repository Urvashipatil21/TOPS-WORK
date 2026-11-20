
#include <stdio.h>

#define DAYS 7
#define ITEMS 3

int main() {
    int sold[DAYS][ITEMS] = {0};
    int choice, day;

    // Display menu until user exits
    do {
        printf("\n===== CHAI SALES LOG =====\n");
        printf("1. Add day's sales\n");
        printf("2. Weekly report\n");
        printf("3. Save\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        // Process menu choice
        switch (choice) {

            case 1:
                printf("Enter day number (1-7): ");
                scanf("%d", &day);

                // Validate day number
                if (day < 1 || day > DAYS) {
                    printf("Invalid day! Enter between 1 and 7.\n");
                }
                else {
                    // Enter sales quantities
                    printf("Enter Tea quantity: ");
                    scanf("%d", &sold[day - 1][0]);

                    printf("Enter Coffee quantity: ");
                    scanf("%d", &sold[day - 1][1]);

                    printf("Enter Samosa quantity: ");
                    scanf("%d", &sold[day - 1][2]);

                    printf("Sales added successfully!\n");
                }
                break;

            case 2:
                printf("Weekly report will be added in Task 2.\n");
                break;

            case 3:
                printf("Save option will be added in Task 3.\n");
                break;

            case 4:
                printf("Thank you! Exiting program.\n");
                break;

            default:
                printf("Invalid choice! Try again.\n");
        }

    } while (choice != 4);

    return 0;
}
