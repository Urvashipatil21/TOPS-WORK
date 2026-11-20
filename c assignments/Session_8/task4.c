
#include <stdio.h>

int highest_of_three(int a, int b, int c);

int main()
{
    int a, b, c;
    int highest;

    printf("Enter three fares: ");
    scanf("%d %d %d", &a, &b, &c);

    highest = highest_of_three(a, b, c);

    printf("Highest fare: %d\n", highest);

    return 0;
}

int highest_of_three(int a, int b, int c)
{
    if (a >= b && a >= c)
    {
        return a;
    }

    if (b >= a && b >= c)
    {
        return b;
    }

    return c;
}
