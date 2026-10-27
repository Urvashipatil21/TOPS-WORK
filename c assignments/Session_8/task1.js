function getUserInitials(fullName) {
    let nameParts = fullName.split(" ");

    let initials = "";

    for (let i = 0; i < nameParts.length; i++) {
        initials += nameParts[i][0];
    }

    return initials.toUpperCase();
}

let result = getUserInitials("Virat Kohli");

console.log("Initials:", result);
