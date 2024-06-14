// primitive datatypes are 7
//string, number, boolean, null, undefined, symbol, BigInt
//they are call by value, copies are given and the changes are done in that copy

//reference type(non primitive) 
//arrays, objects, functions

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId); //false

const bignum = 12342435345231n;

const memes = ["jogi", 'arpitbala','samayrana','mudiji']; //array

let myobj ={
    name:"Saifcasm",
    age: 27
} //object

const muFunction = function(){
    console.log('this is my function');
}

//typeof of null is object
//typeof function is function(also called object function)


// ******************************************
// Stack(Primitive), Heap(Non-Primitive)
// While using stack, it gives us copy and
// while using heap it gives us reference of original where if we change any value it will change in original

let userOne = {
    email: "user1@gmail.com"
}

let userTwo = userOne;

console.log(userOne);
console.log(userTwo);

userTwo.email = 'saifa1209@gmail.com'
console.log('after changing');

console.log(userOne);
console.log(userTwo);