
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Book {
    int id;
    char title[50];
    int issued;
};

struct Book books[8];

void load_register() {
    FILE *fp = fopen("library.txt", "r");

    if (fp == NULL) {
        for (int i = 0; i < 8; i++) {
            books[i].id = i + 1;
            sprintf(books[i].title, "Book%d", i + 1);
            books[i].issued = 0;
        }
        printf("Default 8 books loaded.\n");
    } else {
        for (int i = 0; i < 8; i++) {
            fscanf(fp, "%d %49s %d",
                   &books[i].id,
                   books[i].title,
                   &books[i].issued);
        }
        fclose(fp);
        printf("Library register loaded.\n");
    }
}

void save_register() {
    FILE *fp = fopen("library.txt", "w");

    if (fp == NULL) {
        printf("File error!\n");
        return;
    }

    for (int i = 0; i < 8; i++) {
        fprintf(fp, "%d %s %d\n",
                books[i].id,
                books[i].title,
                books[i].issued);
    }

    fclose(fp);
    printf("Register saved successfully.\n");
}

void log_action(char action[], int id, char date[]) {
    FILE *fp = fopen("library_log.txt", "a");

    if (fp == NULL) {
        printf("Log file error!\n");
        return;
    }

    fprintf(fp, "%s Book ID: %d Date: %s\n",
            action, id, date);

    fclose(fp);
}

void issue_book() {
    int id;
    char date[20];

    printf("Enter Book ID: ");
    scanf("%d", &id);

    if (id < 1 || id > 8) {
        printf("Invalid Book ID!\n");
        return;
    }

    if (books[id - 1].issued == 1) {
        printf("Book is already issued!\n");
        return;
    }

    printf("Enter date (dd/mm/yyyy): ");
    scanf("%19s", date);

    books[id - 1].issued = 1;

    log_action("ISSUED", id, date);

    printf("Book issued successfully!\n");
}

void return_book() {
    int id;
    char date[20];

    printf("Enter Book ID: ");
    scanf("%d", &id);

    if (id < 1 || id > 8) {
        printf("Invalid Book ID!\n");
        return;
    }

    if (books[id - 1].issued == 0) {
        printf("Book is not issued!\n");
        return;
    }

    printf("Enter date (dd/mm/yyyy): ");
    scanf("%19s", date);

    books[id - 1].issued = 0;

    log_action("RETURNED", id, date);

    printf("Book returned successfully!\n");
}

void show_register() {
    printf("\n--- Library Register ---\n");

    for (int i = 0; i < 8; i++) {
        printf("ID: %d | Book: %s | Status: %s\n",
               books[i].id,
               books[i].title,
               books[i].issued ? "Issued" : "Available");
    }
}

int main() {
    int choice;

    load_register();

    do {
        printf("\n===== LIBRARY MANAGEMENT =====\n");
        printf("1. Issue Book\n");
        printf("2. Return Book\n");
        printf("3. Show Register\n");
        printf("4. Exit\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                issue_book();
                break;

            case 2:
                return_book();
                break;

            case 3:
                show_register();
                break;

            case 4:
                save_register();
                printf("Thank you! Program exited.\n");
                break;

            default:
                printf("Invalid choice! Try again.\n");
        }

    } while (choice != 4);

    return 0;
}
