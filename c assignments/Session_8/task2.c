
#include <stdio.h>

int fare_for(int stops);

void show_fare_chart(void);
void count_passengers(void);
void daily_collection(void);
void show_seat_map(void);
void show_fare_ladder(void);
void print_ticket_border(void);

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
        printf("5. Seat Map\n");
        printf("6. Fare Ladder\n");
        printf("7. Ticket Border\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                show_fare_chart();
                break;

            case 2:
                count_passengers();
                break;

            case 3:
                printf("Thank you!\n");
                break;

            case 4:
                daily_collection();
                break;

            case 5:
                show_seat_map();
                break;

            case 6:
                show_fare_ladder();
                break;

            case 7:
                print_ticket_border();
                break;

            default:
                printf("Try again\n");
        }

    } while (choice != 3);

    return 0;
}

int fare_for(int stops)
{
    return 10 + (stops - 1) * 4;
}

void show_fare_chart(void)
{
    int stops;

    printf("Stops\tFare\n");

    for (stops = 1; stops <= 20; stops++)
    {
        printf("%d\t%d\n", stops, fare_for(stops));
    }
}

void count_passengers(void)
{
    int passengers, total = 0;

    printf("Enter passengers (0 to stop): ");
    scanf("%d", &passengers);

    while (passengers != 0)
    {
        total += passengers;

        printf("Enter passengers (0 to stop): ");
        scanf("%d", &passengers);
    }

    printf("Total passengers: %d\n", total);
}

void daily_collection(void)
{
    int tickets, fare, total = 0, highest = 0;

    printf("Enter number of tickets: ");
    scanf("%d", &tickets);

    for (int i = 1; i <= tickets; i++)
    {
        printf("Enter fare for ticket %d: ", i);
        scanf("%d", &fare);

        total += fare;

        if (fare > highest)
        {
            highest = fare;
        }
    }

    printf("Total collection: %d\n", total);
    printf("Highest fare: %d\n", highest);
}

void show_seat_map(void)
{
    int row, seat;

    for (row = 1; row <= 10; row++)
    {
        for (seat = 0; seat < 4; seat++)
        {
            if ((row == 1 && seat == 1) ||
                (row == 3 && seat == 2) ||
                (row == 5 && seat == 0) ||
                (row == 10 && seat == 3))
            {
                printf("XX");
            }
            else
            {
                printf("%d%c", row, 'A' + seat);
            }

            if (seat == 1)
                printf("\t\t");
            else
                printf("\t");
        }

        printf("\n");
    }
}

void show_fare_ladder(void)
{
    int row, stops;

    for (row = 1; row <= 6; row++)
    {
        for (stops = 1; stops <= row; stops++)
        {
            printf("%d ", fare_for(stops));
        }

        printf("\n");
    }
}

void print_ticket_border(void)
{
    int row, col;

    for (row = 1; row <= 5; row++)
    {
        for (col = 1; col <= 24; col++)
        {
            if (row == 1 || row == 5 || col == 1 || col == 24)
                printf("#");
            else
                printf(" ");
        }

        printf("\n");
    }
}
