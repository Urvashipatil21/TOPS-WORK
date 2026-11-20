
#include <stdio.h>
#include <string.h>

int main()
{
    char titles[8][30];

    strcpy(titles[0], "Ocean_Notes");
    strcpy(titles[1], "Silent_Forest");
    strcpy(titles[2], "Golden_Dreams");
    strcpy(titles[3], "Blue_Horizon");
    strcpy(titles[4], "Hidden_World");
    strcpy(titles[5], "Magic_Library");
    strcpy(titles[6], "Starry_Night");
    strcpy(titles[7], "Moonlight_Tale");

    printf("Library Book Register\n\n");

    for (int i = 0; i < 8; i++)
    {
printf("%s - Length: %d\n", titles[i], (int)strlen(titles[i]));    }

    return 0;
}
