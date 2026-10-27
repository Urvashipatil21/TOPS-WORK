const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let songs = [
    "Kesariya",
    "Tum Hi Ho",
    "Apna Bana Le"
];

let randomIndex = Math.floor(Math.random() * songs.length);
let selectedSong = songs[randomIndex];

function guessSong() {
    rl.question("Guess the song: ", function(guess) {

        if (guess.toLowerCase() === selectedSong.toLowerCase()) {
            console.log("Correct! You guessed the song!");
            console.log("The song was:", selectedSong);
            rl.close();
        } 
        else {
            console.log("Wrong guess! Try again.");
            guessSong();
        }
    });
}

guessSong();