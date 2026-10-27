const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number of rows: ", function(rows) {

    rows = Number(rows);

    for (let i = 1; i <= rows; i++) {

        let spaces = "";
        let stars = "";

        for (let j = 1; j <= rows - i; j++) {
            spaces += " ";
        }

        for (let j = 1; j <= 2 * i - 1; j++) {
            stars += "*";
        }

        console.log(spaces + stars);
    }

    rl.close();
});