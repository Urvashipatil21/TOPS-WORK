
#include <stdio.h>
#include <string.h>

int main()
{
    char titles[8][30];
    char issued_to[8][30];
    char search[30];
    char member[30];
    int found;

    strcpy(titles[0], "Ocean_Notes");
    strcpy(titles[1], "Silent_Forest");
    strcpy(titles[2], "Golden_Dreams");
    strcpy(titles[3], "Blue_Horizon");
    strcpy(titles[4], "Hidden_World");
    strcpy(titles[5], "Magic_Library");
    strcpy(titles[6], "Starry_Night");
    strcpy(titles[7], "Moonlight_Tale");

    for (int i = 0; i < 8; i++)
    {
        issued_to[i][0] = '\0';
    }

    // Issue two books
    for (int j = 0; j < 2; j++)
    {
        printf("\nEnter book title to issue: ");
        scanf("%29s", search);

        found = 0;

        for (int i = 0; i < 8; i++)
        {
            if (strcmp(search, titles[i]) == 0)
            {
                found = 1;

                if (strlen(issued_to[i]) == 0)
                {
                    printf("Enter member name: ");
                    scanf("%29s", member);

                    strcpy(issued_to[i], member);
                    printf("Issued to %s\n", member);
                }
                else
                {
                    printf("Already issued to %s\n", issued_to[i]);
                }

                break;
            }
        }

        if (found == 0)
        {
            printf("Not available\n");
        }
    }

    // Return a book
    printf("\nEnter book title to return: ");
    scanf("%29s", search);

    found = 0;

    for (int i = 0; i < 8; i++)
    {
        if (strcmp(search, titles[i]) == 0)
        {
            found = 1;

            if (strlen(issued_to[i]) > 0)
            {
                strcpy(issued_to[i], "");
                printf("Book returned successfully\n");
            }
            else
            {
                printf("Book is already available\n");
            }

            break;
        }
    }

    if (found == 0)
    {
        printf("Not available\n");
    }

    // Print complete register
    printf("\n===== LIBRARY REGISTER =====\n");

    for (int i = 0; i < 8; i++)
    {
        printf("%s - ", titles[i]);

        if (strlen(issued_to[i]) == 0)
        {
            printf("Available\n");
        }
        else
        {
            printf("%s\n", issued_to[i]);
        }
    }

    return 0;
}

