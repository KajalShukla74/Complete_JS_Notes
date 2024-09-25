//All primitive datatypes goes under stack memory and All non-primitive Datatypes goes under heap memomory which means
//1. In Stack memory we get the copy of our declare variable i.e whatever changes we do is done in the the copy of our variable .
//2. In heap memory  we get the reference of our original declared variable id.e whatever changes we do is done in the the original value of our variable .

//STACK MEMORY
let MyYoutubeName = "Kajal";

let anotherYoutubeName = MyYoutubeName;
anotherYoutubeName = "Komal";
console.log(MyYoutubeName);
console.log(anotherYoutubeName);
//(Here changes are done only in the copy of the data i.e only in anotheryoutubechannel not in my youtube chaneel )

//HEAP MEMORY
let userOne = {
    email: "kajal.shukla@gmail.com",
    PhoneNo: 7410791526
}

let userTwo = userOne;

userTwo.email = "shukla@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

//(Here changes are done in both the objects as the changes are done in original data as thet are referenced)


