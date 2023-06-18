const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    let sum = Number(input[0]) + Number(input[1]);
    let output =`${input[0]} + ${input[1]} = ${sum}`; 
    console.log(output);
}).on('close', function () {

});