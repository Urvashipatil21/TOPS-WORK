#include <stdio.h>

int main()
{
    char item_code;
    int quantity;
    float rate = 0;

    printf("Enter item code (A/B/C): ");
    scanf(" %c", &item_code);

    printf("Enter quantity: ");
    scanf("%d", &quantity);

    switch (item_code)
    {
        case 'A':
            rate = 100;
            printf("Item: Rice\n");
            break;

        case 'B':
            rate = 80;
            printf("Item: Dal\n");
            break;

        case 'C':
            rate = 150;
            printf("Item: Oil\n");
            break;

        default:
            printf("Invalid item code!\n");
            return 0;
    }

    printf("Rate: %.2f\n", rate);
    printf("Line Total: %.2f\n", rate * quantity);

    return 0;
}