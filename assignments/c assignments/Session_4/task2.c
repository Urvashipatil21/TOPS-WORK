#include <stdio.h>

float calculateFinalPrice(float productPrice, float discountPercentage, int isMember)
{
    float discount = productPrice * discountPercentage / 100;
    float priceAfterDiscount = productPrice - discount;

    if (isMember == 1)
    {
        priceAfterDiscount = priceAfterDiscount * 95 / 100;
    }

    return priceAfterDiscount;
}

int main()
{
    float productPrice = 2000;
    float discountPercentage = 10;
    int isMember = 1;

    float finalPrice = calculateFinalPrice(productPrice, discountPercentage, isMember);

    printf("Final Price: %.2f\n", finalPrice);

    return 0;
}