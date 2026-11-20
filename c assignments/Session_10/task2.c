
#include <stdio.h>
#include <string.h>

int main()
{
    char titles[8][30];
    char search[30];
    int found = 0;

    strcpy(titles[0], "Ocean_Notes");
    strcpy(titles[1], "Silent_Forest");
    strcpy(titles[2], "Golden_Dreams");
    strcpy(titles[3], "Blue_Horizon");
    strcpy(titles[4], "Hidden_World");
    strcpy(titles[5], "Magic_Library");
    strcpy(titles[6], "Starry_Night");
    strcpy(titles[7], "Moonlight_Tale");

    printf("Enter book title to search: ");
    scanf("%29s", search);

    for (int i = 0; i < 8; i++)
    {
        if (strcmp(search, titles[i]) == 0)
        {
            printf("Found on shelf %d\n", i + 1);
            found = 1;
            break;
        }
    }

    if (found == 0)
    {
        printf("Not available\n");
    }

    return 0;
}
