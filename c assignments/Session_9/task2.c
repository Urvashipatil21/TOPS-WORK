
#include <stdio.h>

#define MONTHS 12

int main()
{
    int units[MONTHS] = {120, 250, 180, 320, 400, 290,
                         150, 350, 280, 420, 200, 300};

    int total = 0;
    double average;

    int highest = units[0];
    int lowest = units[0];
    int highestMonth = 1;
    int lowestMonth = 1;
    int count = 0;

    printf("Month\tUnits\n");

    for (int i = 0; i < MONTHS; i++)
    {
        printf("Month %d\t%d\n", i + 1, units[i]);

        total = total + units[i];

        if (units[i] > highest)
        {
            highest = units[i];
            highestMonth = i + 1;
        }

        if (units[i] < lowest)
        {
            lowest = units[i];
            lowestMonth = i + 1;
        }

        if (units[i] > 300)
        {
            count++;
        }
    }

    average = (double)total / MONTHS;

    printf("\nYearly Total: %d units\n", total);
    printf("Average: %.2f units\n", average);

    printf("Highest: Month %d = %d units\n", highestMonth, highest);
    printf("Lowest: Month %d = %d units\n", lowestMonth, lowest);
    printf("Months above 300 units: %d\n", count);

    return 0;
}
