// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 427267876736n




// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]


let myObj = {
    name: "Debobrata",
    age: 23,
}

const myFunction = function(){
    // console.log("Hello World");
}


// console.log(typeof bigNumber);
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof anotherId);



// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Debobrata"

let anothername = myYoutubename

anothername = "Gobindo"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email : "userOne@gmail.com",
    upi : "userOne@upi",
}
let userTwo = userOne

userTwo.email = "debobrata@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
