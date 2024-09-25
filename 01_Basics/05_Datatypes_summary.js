//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// Comparison: When you check id === anotherId, you are comparing two different symbols.
// Result: Since each symbol is unique, id === anotherId evaluates to false, even though both symbols were created with the same description '123'.

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof anotherId);
