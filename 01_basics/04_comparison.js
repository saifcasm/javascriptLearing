console.log('2'> 1); //true
console.log(2>'1'); //true

//make sure you compare values having same data types

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >=0); //true

//the reason is that an equality check == and comparisons > <= >= works differently 
// comparisons converts null to a number, treating it as 0, thats why (3) null>=0 is true and null>0 is false


// while working with undefined and comparing it with any other number, it gives false



