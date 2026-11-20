
#include <stdio.h>

int main()
{
    int row, stops, fare;

    printf("===== FARE TRIANGLE =====\n");

    for (row = 1; row <= 6; row++)
    {
        for (stops = 1; stops <= row; stops++)
        {
            fare = 10 + (stops - 1) * 4;
            printf("%d ", fare);
        }

        printf("\n");
    }

    return 0;
}
