let isAdult = prompt ("Are you 18+?");

if (isAdult >= 18 && isAdult < 90) {
    alert ('You are adult, you can pass')
<<<<<<< HEAD
} else if (isAdult >= 0 && isAdult < 18) {
    alert ('Apologies, you are too young')
=======
} else if (isAdult >= 0 && isAdult <= 18) {
    alert ('apologies, you are too young')
>>>>>>> d042331cf024fb518766a0c9aaf52e8bae097495
}

else {
alert ('Incorrect value, Try again')    
}