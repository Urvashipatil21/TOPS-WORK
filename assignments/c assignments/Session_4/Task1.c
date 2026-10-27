#include <stdio.h>

float calculateTotal(float itemPrice, int quantity)
{
    return itemPrice * quantity;
}

int main()
{
    float itemPrice = 500;
    int quantity = 3;

    float total = calculateTotal(itemPrice, quantity);

    printf("Total Bill Amount: %.2f\n", total);

    return 0;
}