// Common String Methods
// Here are some commonly used string methods you can try:

// toUpperCase()
// toLowerCase()
// charAt()
// substring()
// slice()
// split()
// trim()
// includes()
// indexOf()
// replace()

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));        //Returns the character at the specified index in a string.

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)      //Returns a portion of the string between the specified start and end indices.
console.log(newString);

const anotherString = gameName.slice(-8, 4)     //Similar to substring but it accepts negative indices as well
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());           //Trims out the white spaces from both the ends

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))     //Tell wheather sundar is there in the string or not 

console.log(gameName.split('-'));       //Splits a string into an array of substrings based on a specified separator.
