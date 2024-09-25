const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)              //adds dc_heros into marvel_heros as a next array

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);           //print flash


const allHeros = marvel_heros.concat(dc_heros)      //Does Similar work as push but it doesnt take dc_heros as one array element it breaks each of its elements
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]       //works same as concat but its a new way where ... is a spread operator 
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//The method flat() is used to "flatten" an array. This means it will reduce the levels of nesting in the array.
//Here, flat(Infinity) means you want to flatten the array to an infinite depth. Essentially, it will remove all levels of nesting, no matter how deep they go.
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({ name: "hitesh" })) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
