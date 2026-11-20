
#include <stdio.h>

int main()
{
    float subtotal;
    float discount = 0;
    float discount_amount;
    float gst;
    float grand_total;

    printf("Enter subtotal: ");
    scanf("%f", &subtotal);

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

    gst = subtotal * 5 / 100.0;
    grand_total = subtotal + gst;

    printf("Discount: %.2f%%\n", discount);
    printf("Discount Amount: %.2f\n", discount_amount);
    printf("GST: %.2f\n", gst);
    printf("Grand Total: %.2f\n", grand_total);

    return 0;
}
