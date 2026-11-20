
#include <stdio.h>

int main()
{
    int stops;
    int fare;

    printf("Stops\tFare\n");

    for (stops = 1; stops <= 20; stops++)
    {
        fare = 10 + (stops - 1) * 4;
        printf("%d\t₹%d\n", stops, fare);
    }

    return 0;
}
