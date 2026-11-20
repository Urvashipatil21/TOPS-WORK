
#include <stdio.h>

int main()
{
    float grand_total = 316.84;
    int cash = 500;

    int bill_amount = (int)grand_total;
    int change = cash - bill_amount;

    int notes_100 = change / 100;
    change = change % 100;

    int notes_50 = change / 50;
    change = change % 50;

    int coins_10 = change / 10;

    printf("Change Calculator\n");
    printf("-------------------------\n");
    printf("100 Rupees Notes: %d\n", notes_100);
    printf("50 Rupees Notes: %d\n", notes_50);
    printf("10 Rupees Coins: %d\n", coins_10);

    return 0;
}
