
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
//console.log(myArr.pop());       //returns the last value of array

console.log(myArr.unshift(9));  //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(myArr.shift());

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


//Arrays methods
// slice
// splice
// indexof
// shift
// unshift
// includes
// Pop
// Push
// join