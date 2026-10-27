const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let teams = [
    "Mumbai Indians",
    "Chennai Super Kings",
    "Royal Challengers Bengaluru"
];

function menu() {
    console.log("\n1. View Favorite IPL Teams");
    console.log("2. Add New Team");
    console.log("3. Exit");

    rl.question("Enter your choice: ", function(choice) {

        if (choice === "1") {
            console.log("\nFavorite IPL Teams:");

            teams.forEach(function(team) {
                console.log(team);
            });

            menu();
        }
        else if (choice === "2") {
            rl.question("Enter new team name: ", function(newTeam) {
                teams.push(newTeam);
                console.log("Team added successfully!");
                menu();
            });
        }
        else if (choice === "3") {
            console.log("Exiting...");
            rl.close();
        }
        else {
            console.log("Invalid choice!");
            menu();
        }
    });
}

menu();