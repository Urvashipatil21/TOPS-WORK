
#include <stdio.h>
#include <string.h>

struct Date {
    int day;
    int month;
    int year;
};

struct Book {
    int id;
    char title[30];
    char member[30];
    struct Date issue_date;
};

void load_register(struct Book books[], int count) {
    FILE *fp;
    int i = 0;

    fp = fopen("library.txt", "r");

    if (fp == NULL) {
        printf("Library file not found!\n");
        return;
    }

    while (i < count &&
           fscanf(fp, "%d %29s %29s %d %d %d",
                  &books[i].id,
                  books[i].title,
                  books[i].member,
                  &books[i].issue_date.day,
                  &books[i].issue_date.month,
                  &books[i].issue_date.year) == 6) {

        if (strcmp(books[i].member, "-") == 0) {
            strcpy(books[i].member, "");
        }

        i++;
    }

    fclose(fp);

    printf("Library register loaded successfully!\n");

    for (int j = 0; j < i; j++) {
        printf("\nBook ID: %d", books[j].id);
        printf("\nTitle: %s", books[j].title);

        if (strlen(books[j].member) == 0) {
            printf("\nMember: Not Issued");
        } else {
            printf("\nMember: %s", books[j].member);
        }

        printf("\nIssue Date: %02d/%02d/%d\n",
               books[j].issue_date.day,
               books[j].issue_date.month,
               books[j].issue_date.year);
    }
}

int main() {
    struct Book books[8];

    load_register(books, 8);

    return 0;
}
