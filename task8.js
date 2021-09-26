const firstCount = 3600;
const hoursInDay = 24;
const hour = 1;
let daysInMonth = 30;

let secondsInHour = hour * firstCount;
let secondsInDay = secondsInHour*hoursInDay;
let secondsinMonth = secondsInDay*daysInMonth;   

alert("One hour has " + secondsInHour + "seconds " + "One day has " + secondsInDay + "seconds " + "One month has " + secondsinMonth "seconds );

or 

// let hour = 1;

// let secondsInHour = hour * 3600;
// let secondsInDay = secoundsInHour*24;
// let secondsInMonth = secondsInDay*30;   

// console.log(secondsInHour, secondsInDay, secondsInMonth);