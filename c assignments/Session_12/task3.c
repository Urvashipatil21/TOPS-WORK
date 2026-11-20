
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

    int book_id, i, found = 0;

    char member_name[30];

    printf("Enter Book ID: ");
    scanf("%d", &book_id);

    for (i = 0; i < 8; i++)
    {
        if (books[i].id == book_id)
        {
            found = 1;

            if (strlen(books[i].member) != 0)
            {
                printf("Book is already issued.\n");
                break;
            }

            printf("Enter Member Name: ");
            scanf("%29s", member_name);

            strcpy(books[i].member, member_name);

            printf("Enter Issue Date (dd mm yyyy): ");
            scanf("%d %d %d",
                  &books[i].issue_date.day,
                  &books[i].issue_date.month,
                  &books[i].issue_date.year);

            printf("\nIssued: %d, %s, %02d/%02d/%04d\n",
                   books[i].id,
                   books[i].member,
                   books[i].issue_date.day,
                   books[i].issue_date.month,
                   books[i].issue_date.year);

            break;
        }
    }

    if (found == 0)
    {
        printf("No such book\n");
    }

    return 0;
}
