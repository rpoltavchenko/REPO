const firstCount = 3600;
const hoursInDay = 24;
const hour = 1;
let daysInMonth = 30;

let secondsInHour = hour * firstCount;
let secondsInDay = secondsInHour*hoursInDay;
let secondsinMonth = secondsInDay*daysInMonth;   

alert("One hour has " + secondsInHour + " seconds.\n" + "One day has " + secondsInDay + " seconds.\n" + "One month has " + secondsinMonth + " seconds." );

// конструкцію \n вичитав в книжці "Eloquent JavaScript"