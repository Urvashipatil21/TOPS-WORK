
#include <stdio.h>

int fare_for(int stops);

int main()
{
    int stops;

    printf("Stops\tFare\n");

    for (stops = 1; stops <= 20; stops++)
    {
        printf("%d\t₹%d\n", stops, fare_for(stops));
    }

    return 0;
}

int fare_for(int stops)
{
    return 10 + (stops - 1) * 4;
}
