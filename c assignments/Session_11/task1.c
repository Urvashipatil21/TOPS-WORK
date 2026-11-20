
#include <stdio.h>

int main()
{
    int fine_days[8] = {2, 5, 0, 3, 7, 1, 4, 6};

    int *p;
    int total = 0;
    int i;

    p = fine_days;

    printf("Library Fine Details\n");

    for (i = 0; i < 8; i++)
    {
        printf("Book %d: %d overdue days\n", i + 1, *(p + i));

        total = total + *(p + i);
    }

    printf("Total overdue days: %d\n", total);
    printf("Total fine: Rs. %d\n", total * 2);

    return 0;
}
