
#include <stdio.h>

void find_most_overdue(int *days, int count, int *position)
{
    int i;

    *position = 0;

    for (i = 1; i < count; i++)
    {
        if (*(days + i) > *(days + *position))
        {
            *position = i;
        }
    }
}

int main()
{
    char titles[8][50] = {
        "The Alchemist",
        "Rich Dad Poor Dad",
        "Wings of Fire",
        "Atomic Habits",
        "Think and Grow Rich",
        "The Power of Now",
        "Ikigai",
        "The Secret"
    };

    int fine_days[8] = {2, 5, 0, 3, 7, 1, 4, 6};

    int position;

    find_most_overdue(fine_days, 8, &position);

    printf("Most Overdue Book Details\n");

    printf("Book Name: %s\n", titles[position]);

    printf("Overdue Days: %d\n", fine_days[position]);

    return 0;
}
