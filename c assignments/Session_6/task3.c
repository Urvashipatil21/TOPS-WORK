
#include <stdio.h>

int main()
{
    int choice;

    do
    {
        printf("\n===== BUS MENU =====\n");
        printf("1. Fare Chart\n");
        printf("2. Count Passengers\n");
        printf("3. Exit\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
            {
                int stops, fare;

                printf("\nStops\tFare\n");

                for (stops = 1; stops <= 20; stops++)
                {
                    fare = 10 + (stops - 1) * 4;
                    printf("%d\t₹%d\n", stops, fare);
                }
                break;
            }

            case 2:
            {
                int passengers, total = 0;

                printf("Enter passengers (0 to stop): ");
                scanf("%d", &passengers);

                while (passengers != 0)
                {
                    total = total + passengers;

                    printf("Enter passengers (0 to stop): ");
                    scanf("%d", &passengers);
                }

                printf("Total passengers: %d\n", total);
                break;
            }

            case 3:
                printf("Thank you! Exiting...\n");
                break;

            default:
                printf("Try again\n");
        }

    } while (choice != 3);

    return 0;
}
