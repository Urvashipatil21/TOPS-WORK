
#include <stdio.h>
#include <string.h>

struct Date
{
    int day;
    int month;
    int year;
};

struct Book
{
    int id;
    char title[30];
    char member[30];
    struct Date issue_date;
};

int main()
{
    struct Book books[8] = {
        {101, "Ocean_Notes", "", {0, 0, 0}},
        {102, "The_Alchemist", "", {0, 0, 0}},
        {103, "Atomic_Habits", "", {0, 0, 0}},
        {104, "Rich_Dad", "", {0, 0, 0}},
        {105, "Wings_of_Fire", "", {0, 0, 0}},
        {106, "The_Secret", "", {0, 0, 0}},
        {107, "Ikigai", "", {0, 0, 0}},
        {108, "Power_of_Now", "", {0, 0, 0}}
    };

    int i;

    printf("----- LIBRARY REGISTER -----\n");
    printf("ID\tTitle\t\t\tStatus\n");

    for (i = 0; i < 8; i++)
    {
        printf("%d\t%-20s\t", books[i].id, books[i].title);

        if (strlen(books[i].member) == 0)
        {
            printf("Available\n");
        }
        else
        {
            printf("Issued\n");
        }
    }

    return 0;
}
