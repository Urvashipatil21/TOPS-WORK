
#include <stdio.h>

int main()
{
    char item_code, member;
    int quantity;
    float rate = 0;
    float subtotal, discount = 0;
    float discount_amount, member_discount = 0;
    float gst, grand_total;

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

    subtotal = rate * quantity;

    if (subtotal <= 200)
    {
        discount = 0;
    }
    else if (subtotal <= 500)
    {
        discount = 5;
    }
    else
    {
        discount = 10;
    }

    discount_amount = subtotal * discount / 100.0;
    subtotal = subtotal - discount_amount;

    printf("Are you a member? (Y/N): ");
    scanf(" %c", &member);

    if (member == 'Y' || member == 'y')
    {
        if (rate * quantity > 300)
        {
            member_discount = 10;
        }
    }

    subtotal = subtotal - member_discount;

    gst = subtotal * 5 / 100.0;
    grand_total = subtotal + gst;

    printf("\n----- FINAL BILL -----\n");
    printf("Rate: %.2f\n", rate);
    printf("Quantity: %d\n", quantity);
    printf("Discount: %.2f\n", discount_amount);
    printf("Member Discount: %.2f\n", member_discount);
    printf("GST: %.2f\n", gst);
    printf("Grand Total: %.2f\n", grand_total);

    return 0;
}
