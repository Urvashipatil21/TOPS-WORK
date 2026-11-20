
#include <stdio.h>

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
    struct Book book = {
        101,
        "The_Alchemist",
        "Urvashi",
        {12, 10, 2026}
    };

    printf("Book ID: %d\n", book.id);
    printf("Book Title: %s\n", book.title);
    printf("Member Name: %s\n", book.member);

    printf("Issued: %d/%d/%d\n",
           book.issue_date.day,
           book.issue_date.month,
           book.issue_date.year);

    return 0;
}
