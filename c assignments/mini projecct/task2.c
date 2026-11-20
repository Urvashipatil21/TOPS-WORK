
#include <stdio.h>

#define DAYS 7
#define ITEMS 3

int main() {
    int sold[DAYS][ITEMS] = {0};
    int price[ITEMS] = {10, 15, 12};
    int choice, day;
    int dailyRevenue, weeklyRevenue = 0;
    int bestDay = 1, bestRevenue = 0;

    do {
        printf("\n===== CHAI SALES LOG =====\n");
        printf("1. Add day's sales\n");
        printf("2. Weekly report\n");
        printf("3. Save\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {

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

            case 2:
                weeklyRevenue = 0;
                bestRevenue = -1;

                printf("\nDAY\tTEA\tCOFFEE\tSAMOSA\tREVENUE\n");

                for (day = 0; day < DAYS; day++) {
                    dailyRevenue = 0;

                    for (int item = 0; item < ITEMS; item++) {
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

            case 3:
                printf("Save option will be added in Task 3.\n");
                break;

            case 4:
                printf("Thank you! Exiting program.\n");
                break;

            default:
                printf("Invalid choice!\n");
        }

    } while (choice != 4);

    return 0;
}
