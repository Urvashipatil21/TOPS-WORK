
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

void save_register(struct Book books[], int count)
{
    FILE *fp;
    int i;

    fp = fopen("library.txt", "w");

    if (fp == NULL)
    {
        printf("Unable to open file!\n");
        return;
    }

    for (i = 0; i < count; i++)
    {
        if (strlen(books[i].member) == 0)
        {
            fprintf(fp, "%d %s - %d %d %d\n",
                    books[i].id,
                    books[i].title,
                    books[i].issue_date.day,
                    books[i].issue_date.month,
                    books[i].issue_date.year);
        }
        else
        {
            fprintf(fp, "%d %s %s %d %d %d\n",
                    books[i].id,
                    books[i].title,
                    books[i].member,
                    books[i].issue_date.day,
                    books[i].issue_date.month,
                    books[i].issue_date.year);
        }
    }

    fclose(fp);

    printf("Library register saved successfully!\n");
}

int main()
{
    struct Book books[8] = {
        {101, "Ocean_Notes", "Urvashi", {12, 10, 2026}},
        {102, "The_Alchemist", "Priya", {13, 10, 2026}},
        {103, "Atomic_Habits", "", {0, 0, 0}},
        {104, "Rich_Dad", "", {0, 0, 0}},
        {105, "Wings_of_Fire", "", {0, 0, 0}},
        {106, "The_Secret", "", {0, 0, 0}},
        {107, "Ikigai", "", {0, 0, 0}},
        {108, "Power_of_Now", "", {0, 0, 0}}
    };

    save_register(books, 8);

    return 0;
}
