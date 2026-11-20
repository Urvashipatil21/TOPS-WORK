
#include <stdio.h>

#define MONTHS 12

int main()
{
    int units[MONTHS] = {120, 250, 180, 320, 400, 290,
                         150, 350, 280, 420, 200, 300};

    int total = 0;
    double average;

    printf("Month\tUnits\n");

    for (int i = 0; i < MONTHS; i++)
    {
        printf("Month %d\t%d\n", i + 1, units[i]);
        total = total + units[i];
    }

    average = (double)total / MONTHS;

    printf("\nYearly Total: %d units\n", total);
    printf("Average: %.2f units\n", average);

    return 0;
}
