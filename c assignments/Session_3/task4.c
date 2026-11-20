
#include <stdio.h>

int main()
{
    int customer_id = 101;
    float loyalty_points = 250.5;
    char member_class = 'A';
    double discount_rate = 10.75;

    printf("Customer Details\n");
    printf("------------------------\n");
    printf("Customer ID: %d\n", customer_id);
    printf("Loyalty Points: %.1f\n", loyalty_points);
    printf("Member Class: %c\n", member_class);
    printf("Discount Rate: %.2f\n", discount_rate);

    return 0;
}
