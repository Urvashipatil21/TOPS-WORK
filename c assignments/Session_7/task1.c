
#include <stdio.h>

int main()
{
    int row, seat;

    printf("===== BUS SEAT MAP =====\n");

    for (row = 1; row <= 10; row++)
    {
        for (seat = 0; seat < 4; seat++)
        {
            printf("%d%c", row, 'A' + seat);

            if (seat == 1)
            {
                printf("\t\t");
            }
            else
            {
                printf("\t");
            }
        }

        printf("\n");
    }

    return 0;
}
