//We can declare objects in two ways-with literals or with constructor
//If made using constructor then it becomes singletone i.e there is no other object like that .(Creates like Object.create)
//If made using literals then it has multiple instances (created like const object{}).
//here we will learn how to create objects using literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                  //here[mysym is trated as symbol here but if we remove [] it will become string (interview qiestion)]
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)            //One way to access objects
// console.log(JsUser["email"])         //Anoter way to access objects
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                //Freeze is used when u dont want anyone to change ur objects parameters value
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);     //this function is used when to way to assign or use any key of an object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());