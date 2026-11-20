
#include <stdio.h>

void swap_ints(int *a, int *b)
{
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int fine_days[8] = {2, 5, 0, 3, 7, 1, 4, 6};
    int i;

    printf("Before swapping:\n");

    for (i = 0; i < 8; i++)
    {
        printf("%d ", fine_days[i]);
    }

    swap_ints(&fine_days[0], &fine_days[7]);

    printf("\nAfter swapping:\n");

    for (i = 0; i < 8; i++)
    {
        printf("%d ", fine_days[i]);
    }

    return 0;
}
