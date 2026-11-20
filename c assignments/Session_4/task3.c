
#include <stdio.h>

int main()
{
    float subtotal = 301.75;
    int cash = 500;
    float grand_total = 316.84;
    int quantity1 = 2;

    int free_delivery1 = subtotal > 250 || cash >= grand_total && quantity1 >= 3;

    int free_delivery2 = (subtotal > 250 || cash >= grand_total) && quantity1 >= 3;

    printf("Free Delivery without parentheses: %d\n", free_delivery1);
    printf("Free Delivery with parentheses: %d\n", free_delivery2);

    return 0;
}
