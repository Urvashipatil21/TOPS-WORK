
#include <stdio.h>

int main()
{
    int row, seat;

    printf("===== BUS SEAT MAP =====\n");

    for (row = 1; row <= 10; row++)
    {
        for (seat = 0; seat < 4; seat++)
        {
            if ((row == 1 && seat == 1) ||
                (row == 3 && seat == 2) ||
                (row == 5 && seat == 0) ||
                (row == 10 && seat == 3))
            {
                printf("XX");
            }
            else
            {
                printf("%d%c", row, 'A' + seat);
            }

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
