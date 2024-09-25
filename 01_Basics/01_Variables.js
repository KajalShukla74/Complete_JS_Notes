//VAR
//Scope: Function-scoped or globally scoped. If declared outside a function, it is globally available.
var FirstName = "Kajal";
/*Hoisting: Variables declared with var are hoisted to the top of their scope, meaning you can reference them before their declaration, but their value will be undefined until the line where they are initialized.*/
var Name;
//Re-declaration: You can re-declare a var variable within the same scope. 
var FirstName = "Muskan"

//LET
// Block-scoped. It is only accessible within the block (e.g., inside {}) where it was declared.
let LastName = "Shukla";
//Hoisting: Also hoisted, but cannot be accessed before its declaration (temporal dead zone).
//Re-declaration: You cannot re-declare a let variable in the same block.
//let LastName = "prajapati";      gives error

//CONST
/*Scope: Block-scoped, like let.
Hoisting: Hoisted but also in a temporal dead zone.*/
const PhoneNo = 7410791526;

//Re-declaration: Cannot be re-declared in the same block.
//const PhoneNo = 7410791526;    gives error

//Value: Must be initialized at the time of declaration, and its value cannot be reassigned.
//PhoneNo = 7410771524      gives error

//However, if it holds an object or array, the contents can be modified.
const obj = { name: 'Sunaina' };
obj.name = 'Bob'

console.table([FirstName, LastName, PhoneNo, Name, obj.name]);