for (let i = 1; i <= 6; i++) {
    let spaces = "";
    let stars = "";

    for (let j = 1; j <= 6 - i; j++) {
        spaces += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        stars += "*";
    }

    console.log(spaces + stars);
}