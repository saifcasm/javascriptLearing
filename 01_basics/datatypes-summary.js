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