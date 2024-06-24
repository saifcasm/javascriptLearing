const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString()); //100

console.log(balance.toString().length); //3

const otherNum = 456

console.log(otherNum.toFixed(2)); //45.0
// if we use toFixed(which takes a parameter) and we pass 1, it gives 45.0 but be careful while using it

console.log(otherNum.toPrecision(2)); //toPrecision takes a number that how precise a value should be
// if we pass 2 as a parameter it gives 45 only, 
// suppose we have 3 digit value, 
//456 for instance then it gives 4.6e+2(taking only 45 and converting the rest of digits)

const n = 123.366
console.log(n.toPrecision(3)); // 1.2e+2 for 2 digits precise for variable n(12.3.366)
// 123 for 3 digits precise for variable n(123.366)

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000 it uses US number system by default
console.log(hundreds.toLocaleString('en-IN')) //10,00,000 use en-IN for getting values in Indian Number System
