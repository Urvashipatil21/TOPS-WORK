
#include <stdio.h>

int main()
{
    int bill_no = 100;

    printf("Bill Number: %d\n", bill_no++);
    printf("Bill Number: %d\n", ++bill_no);

    int stock1 = 20;

    stock1 -= 2;
    printf("Stock after subtraction: %d\n", stock1);

    stock1--;
    printf("Stock after decrement: %d\n", stock1);

    return 0;
}
