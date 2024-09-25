const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));            //The toFixed() method converts a number to a string.
//The toFixed() method rounds the string to a specified number of decimals.

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(5));        //The toPrecision() method formats a number to a specified length.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));              //Return neg value in +ve
console.log(Math.round(4.6));           //gives round off value(Same in our normal maths i.e 4.6 gives 5)
console.log(Math.ceil(4.2));            //gives large value in round off(i.e 4.2 also give 5 and 4.9 also give 5)
console.log(Math.floor(4.9));           ////gives small value in round off(i.e 4.2 also give 4 and 4.9 also give 4)
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)