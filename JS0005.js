let rows = 5;
let num = 1;

for (let i = 1; i <= rows; i++) {

    for (let j = 1; j <= i; j++) {
        process.stdout.write(num + " ");
        num++;
    }

    console.log();
}