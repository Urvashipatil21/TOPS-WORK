
#include <stdio.h>

int main()
{
    int row, col;

    printf("===== BUS TICKET =====\n");

    for (row = 1; row <= 5; row++)
    {
        for (col = 1; col <= 24; col++)
        {
            if (row == 1 || row == 5 || col == 1 || col == 24)
            {
                printf("#");
            }
            else
            {
                printf(" ");
            }
        }

        printf("\n");
    }

    return 0;
}
