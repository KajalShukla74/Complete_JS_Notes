console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
// When comparing null with a number (like 0), JavaScript performs type coercion. However, the rule here is important:
// null is only loosely equal to undefined, not to 0.
console.log(null >= 0);
/*Here result in == and in comparison operators are different bcoz the reason is that an equality check == and comparisons >< >= <= works differently.Comparisons convert null to a number treating it as 0.(thats why(3rd line in cnsole)null>=0 is true and null>0 is false)*/