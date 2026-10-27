#include <stdio.h>

int main()
{
    int followerCount = 5;

    printf("Original count: %d\n", followerCount);

    printf("Pre-increment: %d\n", ++followerCount);

    printf("Post-increment: %d\n", followerCount++);

    printf("Count after increment: %d\n", followerCount);

    return 0;
}
