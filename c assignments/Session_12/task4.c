
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

void print_book(struct Book b)
{
    printf("%d\t%-20s\t", b.id, b.title);

    if (strlen(b.member) == 0)
    {
        printf("Available\n");
    }
    else
    {
        printf("%s\t%02d/%02d/%04d\n",
               b.member,
               b.issue_date.day,
               b.issue_date.month,
               b.issue_date.year);
    }
}

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

    int i, book_id, found, j;

    char member_name[30];

    // Initial register
    printf("----- INITIAL LIBRARY REGISTER -----\n");

    for (i = 0; i < 8; i++)
    {
        print_book(books[i]);
    }

    // Issue two books
    for (j = 1; j <= 2; j++)
    {
        found = 0;

        printf("\nEnter Book ID to issue: ");
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

                printf("Book issued successfully!\n");
                break;
            }
        }

        if (found == 0)
        {
            printf("No such book\n");
            j--;
        }
    }

    // Return first issued book
    printf("\nEnter Book ID to return: ");
    scanf("%d", &book_id);

    found = 0;

    for (i = 0; i < 8; i++)
    {
        if (books[i].id == book_id)
        {
            found = 1;

            strcpy(books[i].member, "");

            books[i].issue_date.day = 0;
            books[i].issue_date.month = 0;
            books[i].issue_date.year = 0;

            printf("Book returned successfully!\n");
            break;
        }
    }

    if (found == 0)
    {
        printf("No such book\n");
    }

    // Final register
    printf("\n----- FINAL LIBRARY REGISTER -----\n");

    for (i = 0; i < 8; i++)
    {
        print_book(books[i]);
    }

    return 0;
}
