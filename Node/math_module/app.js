
const theMath = require('./mathlib.js')

console.log(theMath());


let x = 3;

let y = 10;

//use the math module
console.log( `the square of ${ x } is ${ theMath().square(x) }`);

x = 5; //doesen't change xSquared becaue xSquared was calculated before the reassignment of x

console.log( `the product of ${ x } and ${ y } is ${ theMath().multiply(x,y) }`);

console.log( `the sum of ${ x } and ${ y } is ${ theMath().add(x,y) }`);

x = 1;
y = 35;

console.log( `random number between ${ x } and ${ y } : ${ theMath().random(y, x) }` );  //works no matter the order the args given 
