
#include <stdio.h>

#define GST_PERCENT 5

int main()
{
    const float DELIVERY_CHARGE = 20.50;

    printf("Bill Settings:\n");
    printf("GST Percent: %d%%\n", GST_PERCENT);
    printf("Delivery Charge: %.2f\n", DELIVERY_CHARGE);
    printf("Category: %c\n", 'R');
    printf("Message: %s\n", "Thank you");

    return 0;
}
