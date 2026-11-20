
#include <stdio.h>

void print_discounted(int fare);

int main()
{
    int fare = 86;

    print_discounted(fare);

    printf("Main fare: %d\n", fare);

    return 0;
}

void print_discounted(int fare)
{
    fare = fare * 75 / 100;

    printf("Discounted fare: %d\n", fare);
}
