#include <stdio.h>
#include <string.h>

int main()
{
    char team[50];

    printf("Enter your favorite IPL team: ");
    fgets(team, sizeof(team), stdin);

    team[strcspn(team, "\n")] = '\0';

    if (strcmp(team, "Mumbai Indians") == 0)
    {
        printf("Go Mumbai Indians!\n");
    }
    else if (strcmp(team, "Chennai Super Kings") == 0)
    {
        printf("Chennai Super Kings for the win!\n");
    }
    else if (strcmp(team, "Royal Challengers Bengaluru") == 0)
    {
        printf("Go RCB! Ee Sala Cup Namde!\n");
    }
    else if (strcmp(team, "Kolkata Knight Riders") == 0)
    {
        printf("Come on Kolkata Knight Riders!\n");
    }
    else if (strcmp(team, "Rajasthan Royals") == 0)
    {
        printf("Go Rajasthan Royals!\n");
    }
    else
    {
        printf("Team not found!\n");
    }

    return 0;
}