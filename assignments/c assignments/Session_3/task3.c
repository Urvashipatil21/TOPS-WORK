#include <stdio.h>

int main()
{
    char playlistName[] = "My Favorite Songs";
    int totalSongs = 25;
    float averageDuration = 3.5;

    printf("My Spotify playlist \"%s\" has %d songs with an average duration of %.1f minutes.\n",
           playlistName, totalSongs, averageDuration);

    return 0;
}