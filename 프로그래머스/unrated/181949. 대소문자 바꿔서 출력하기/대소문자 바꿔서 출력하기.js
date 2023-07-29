const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const convert = str.split('').map(value => {
        if (value == value.toUpperCase()) {
            return value.toLowerCase();
        } else {
            return value.toUpperCase();
        }
    }).join('');
    console.log(convert);
});