let a = parseInt(prompt("Enter the first Value"));
let b = parseInt(prompt("Enter the second Value"));
let c = parseInt(prompt("Enter the third Value"));

let p = (a+b+c)/2;
let square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(parseFloat(square.toFixed(3)));



let firstRightCond = a**2==b**2+c**2;
let secondRightCond = b**2==a**2+c**2;
let thirdRightCond = c**2==b**2+a**2;

if (firstRightCond  || secondRightCond  || thirdRightCond === true) {
    console.log ('Your triange is right')}
else {
console.log ('You have other type of triangle')    
}

const firstCond = a<b+c;
const secondCond = b<a+c;
const thirdCond = c<a+b;

if (firstCond || secondCond || thirdCond ) {
    console.log ('Your data is right')}
else {
console.log ('invalid data')    
}

