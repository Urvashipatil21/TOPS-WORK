
#include <stdio.h>

int main()
{
    int books_issued = 5;

    int *ptr = &books_issued;

    printf("Original value: %d\n", books_issued);

    printf("Address of books_issued: %p\n", (void *)ptr);

    printf("Value through pointer: %d\n", *ptr);

    *ptr = 6;

    printf("Updated value: %d\n", books_issued);

    return 0;
}
