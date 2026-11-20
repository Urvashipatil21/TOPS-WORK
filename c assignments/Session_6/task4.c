
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
        printf("4. Daily Collection\n");

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

            case 4:
            {
                int tickets, fare;
                int total = 0;
                int highest = 0;

                printf("Enter number of tickets sold: ");
                scanf("%d", &tickets);

                for (int i = 1; i <= tickets; i++)
                {
                    printf("Enter fare for ticket %d: ", i);
                    scanf("%d", &fare);

                    total = total + fare;

                    if (fare > highest)
                    {
                        highest = fare;
                    }
                }

                printf("Total collection: ₹%d\n", total);
                printf("Highest fare: ₹%d\n", highest);
                break;
            }

            default:
                printf("Try again\n");
        }

    } while (choice != 3);

    return 0;
}
