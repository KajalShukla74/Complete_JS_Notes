"use strict";                   //treats all  js code as a newer version
/*In JavaScript, there are several built-in data types. They can be categorized into two main types: primitive types and reference types.

Primitive Types-Simple, single values, fixed size.

Number: Represents both integer and floating-point numbers.
Example: 42, 3.14

String: Represents sequences of characters.
Example: "Hello, World!", 'JavaScript'

Boolean: Represents a logical entity and can be either true or false.

Undefined: A variable that has been declared but not assigned a value is of type undefined.

Null: Represents the intentional absence of any object value. It’s a primitive value that indicates "no value".

Symbol: A unique and immutable primitive used as a key for object properties.(For example when you are designing some frontend in advance js and you want to give some styling to a particular button then u wrap that button into a symbol for uniqueness)

BigInt: A newer addition to represent integers with arbitrary precision.

Example: 1234567890123456789012345678901234567890n */


//NON _PRIMITIVE DATATYPES OR REFERENCE-Complex, can hold multiple values or objects, often mutable
//Objects
//FUNCTIONS
//ARRAY
const person = {
    name: "Alice",
    age: 25,
    greet: function () { console.log("Hello!"); }
};


//all Datatypes eg
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk)
console.log(typeof Symbol("sym")); // "symbol"
console.log(typeof BigInt(123)); // "bigint"
console.log(typeof []); // "object"
console.log(typeof {}); // "object"
console.log(typeof function () { }); // "function"


