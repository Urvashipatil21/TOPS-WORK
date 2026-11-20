
#include <stdio.h>

int main()
{
    int passengers;
    int total = 0;

    printf("Enter passengers boarding (0 to stop): ");
    scanf("%d", &passengers);

    while (passengers != 0)
    {
        total = total + passengers;

        printf("Enter passengers boarding (0 to stop): ");
        scanf("%d", &passengers);
    }

    printf("Total passengers: %d\n", total);

    return 0;
}
