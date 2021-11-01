let isAdult = prompt ("Are you 18+?");

if (isAdult >= 18 && isAdult < 90) {
    alert ('You are adult, you can pass')
} else if (isAdult >= 0 && isAdult < 18) {
    alert ('Apologies, you are too young')
}

else {
alert ('Incorrect value, Try again')    
}