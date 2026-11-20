
#include <stdio.h>

#define MONTHS 12
#define HOUSEHOLDS 3

int main()
{
    int society[HOUSEHOLDS][MONTHS] = {
        {120, 250, 180, 320, 400, 290, 150, 350, 280, 420, 200, 300},
        {100, 180, 220, 300, 350, 250, 200, 400, 320, 280, 150, 240},
        {200, 300, 150, 250, 400, 350, 180, 220, 300, 450, 260, 320}
    };

    int total;
    int columnTotal;
    int highestTotal = 0;
    int highestMonth = 1;

    printf("Household\t");

    for (int col = 0; col < MONTHS; col++)
    {
        printf("M%d\t", col + 1);
    }

    printf("Total\n");

    for (int row = 0; row < HOUSEHOLDS; row++)
    {
        total = 0;
        printf("House %d\t\t", row + 1);

        for (int col = 0; col < MONTHS; col++)
        {
            printf("%d\t", society[row][col]);
            total = total + society[row][col];
        }

        printf("%d\n", total);
    }

    printf("\nMonthly Society Total:\n");

    for (int col = 0; col < MONTHS; col++)
    {
        columnTotal = 0;

        for (int row = 0; row < HOUSEHOLDS; row++)
        {
            columnTotal = columnTotal + society[row][col];
        }

        printf("Month %d: %d units\n", col + 1, columnTotal);

        if (columnTotal > highestTotal)
        {
            highestTotal = columnTotal;
            highestMonth = col + 1;
        }
    }

    

    printf("\nHighest Society Usage: Month %d = %d units\n",
           highestMonth, highestTotal);

    return 0;
}
