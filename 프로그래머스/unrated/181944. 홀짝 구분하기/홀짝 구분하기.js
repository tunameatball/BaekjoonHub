const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    n = Number(input[0]);
    const message = n % 2 == 0 ? `${n} is even` : `${n} is odd`;
    console.log(message);
}).on('close', function () {
    n = Number(input[0]);
});