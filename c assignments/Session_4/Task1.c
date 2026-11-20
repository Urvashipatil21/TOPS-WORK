
#include <stdio.h>

#define GST_PERCENT 5

int main()
{
    int quantity1 = 2;
    int quantity2 = 1;
    int quantity3 = 3;

    float rate1 = 45.50;
    float rate2 = 120.00;
    float rate3 = 30.25;

    float total1 = quantity1 * rate1;
    float total2 = quantity2 * rate2;
    float total3 = quantity3 * rate3;

    float subtotal = total1 + total2 + total3;
    float gst = subtotal * GST_PERCENT / 100.0;
    float grand_total = subtotal + gst;

    printf("KIRANA BILL\n");
    printf("-------------------------\n");

    printf("Item 1 Total: %.2f\n", total1);
    printf("Item 2 Total: %.2f\n", total2);
    printf("Item 3 Total: %.2f\n", total3);

    printf("Subtotal: %.2f\n", subtotal);
    printf("GST: %.2f\n", gst);
    printf("Grand Total: %.2f\n", grand_total);

    return 0;
}
