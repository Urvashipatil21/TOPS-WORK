#include <stdio.h>

int main()
{
    printf("================================\n");
    printf("      SHREE RAM KIRANA STORE\n");
    printf("          Ahmedabad\n");
    printf("       Ph: 9876543210\n");
    printf("--------------------------------\n");
    printf("          TAX INVOICE\n");
    printf("================================\n");

    char item_code1 = 'A';
    int quantity1 = 2;
    float rate1 = 50.50;

    char item_code2 = 'B';
    int quantity2 = 3;
    float rate2 = 25.75;

    char item_code3 = 'C';
    int quantity3 = 1;
    float rate3 = 100.00;

    printf("\nItem Code\tQuantity\tRate\n");

    printf("%c\t\t%d\t\t%.2f\n", item_code1, quantity1, rate1);
    printf("%c\t\t%d\t\t%.2f\n", item_code2, quantity2, rate2);
    printf("%c\t\t%d\t\t%.2f\n", item_code3, quantity3, rate3);

    return 0;
}

