
#include <stdio.h>

#define DAYS 7
#define ITEMS 3

int main() {
    int sold[DAYS][ITEMS] = {0};
    int price[ITEMS] = {10, 15, 12};
    int choice, day, item;
    int dailyRevenue, weeklyRevenue;
    int bestDay, bestRevenue;

    // Load saved sales when the program starts
    FILE *file = fopen("sales.txt", "r");

    if (file != NULL) {
        for (day = 0; day < DAYS; day++) {
            for (item = 0; item < ITEMS; item++) {
                fscanf(file, "%d", &sold[day][item]);
            }
        }
        fclose(file);
        printf("Previous sales loaded successfully!\n");
    }

    // Display menu
    do {
        printf("\n===== CHAI SALES LOG =====\n");
        printf("1. Add day's sales\n");
        printf("2. Weekly report\n");
        printf("3. Save\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {

            // Add sales for a selected day
            case 1:
                printf("Enter day number (1-7): ");
                scanf("%d", &day);

                if (day < 1 || day > DAYS) {
                    printf("Invalid day!\n");
                } else {
                    printf("Enter Tea quantity: ");
                    scanf("%d", &sold[day - 1][0]);

                    printf("Enter Coffee quantity: ");
                    scanf("%d", &sold[day - 1][1]);

                    printf("Enter Samosa quantity: ");
                    scanf("%d", &sold[day - 1][2]);

                    printf("Sales added successfully!\n");
                }
                break;

            // Display weekly report
            case 2:
                weeklyRevenue = 0;
                bestRevenue = -1;
                bestDay = 1;

                printf("\nDAY\tTEA\tCOFFEE\tSAMOSA\tREVENUE\n");

                for (day = 0; day < DAYS; day++) {
                    dailyRevenue = 0;

                    for (item = 0; item < ITEMS; item++) {
                        dailyRevenue += sold[day][item] * price[item];
                    }

                    printf("%d\t%d\t%d\t%d\t%d\n",
                           day + 1,
                           sold[day][0],
                           sold[day][1],
                           sold[day][2],
                           dailyRevenue);

                    weeklyRevenue += dailyRevenue;

                    if (dailyRevenue > bestRevenue) {
                        bestRevenue = dailyRevenue;
                        bestDay = day + 1;
                    }
                }

                printf("\nWeekly Revenue: Rs. %d\n", weeklyRevenue);
                printf("Best Day: %d\n", bestDay);
                break;

            // Save all sales in sales.txt
            case 3:
                file = fopen("sales.txt", "w");

                if (file == NULL) {
                    printf("Error opening sales.txt!\n");
                } else {
                    for (day = 0; day < DAYS; day++) {
                        for (item = 0; item < ITEMS; item++) {
                            fprintf(file, "%d ", sold[day][item]);
                        }
                        fprintf(file, "\n");
                    }

                    fclose(file);
                    printf("Sales saved successfully!\n");
                }
                break;

            // Exit program
            case 4:
                printf("Thank you! Exiting program.\n");
                break;

            default:
                printf("Invalid choice!\n");
        }

    } while (choice != 4);

    return 0;
}
