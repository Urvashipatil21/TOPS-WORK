#include <stdio.h>

int isEligibleForOffer(int age, float totalOrderValue)
{
    return age >= 18 && totalOrderValue > 500;
}

int main()
{
    int age = 20;
    float totalOrderValue = 800;

    int result = isEligibleForOffer(age, totalOrderValue);

    printf("Eligible for Offer: %s\n", result ? "true" : "false");

    return 0;
}