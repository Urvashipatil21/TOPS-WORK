#include <stdio.h>

int main()
{
    float subtotal;
    float discount = 0;
    char member;

    printf("Enter subtotal: ");
    scanf("%f", &subtotal);

    printf("Are you a member? (Y/N): ");
    scanf(" %c", &member);

    if (member == 'Y' || member == 'y')
    {
        if (subtotal > 300)
        {
            discount = 10;
        }
    }

    printf("Membership Discount: %.2f\n", discount);
    printf("Final Amount: %.2f\n", subtotal - discount);

    return 0;
}