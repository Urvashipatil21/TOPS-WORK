
#include <stdio.h>

void log_action(char action[], int book_id, int day, int month, int year) {
    FILE *fp;

    fp = fopen("library_log.txt", "a");

    if (fp == NULL) {
        printf("Unable to open log file!\n");
        return;
    }

    fprintf(fp, "%s Book ID: %d Date: %02d/%02d/%04d\n",
            action, book_id, day, month, year);

    fclose(fp);

    printf("Action recorded successfully!\n");
}

int main() {
    int choice;
    int book_id;
    int day, month, year;

    printf("Library Log System\n");
    printf("1. Issue Book\n");
    printf("2. Return Book\n");

    printf("Enter your choice: ");
    scanf("%d", &choice);

    printf("Enter Book ID: ");
    scanf("%d", &book_id);

    printf("Enter date (DD MM YYYY): ");
    scanf("%d %d %d", &day, &month, &year);

    if (choice == 1) {
        log_action("ISSUED", book_id, day, month, year);
    } else if (choice == 2) {
        log_action("RETURNED", book_id, day, month, year);
    } else {
        printf("Invalid choice!\n");
    }

    return 0;
}
                                                                                                                                                                                                                                                        