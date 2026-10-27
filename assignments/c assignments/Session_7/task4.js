for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if ((i + j) % 2 === 0) {
            process.stdout.write("0 ");
        } else {
            process.stdout.write("1 ");
        }
    }
    console.log();
}