// 3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
// Функція повертає назву місяця відповідно до введеного номера місяця
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// 	Приклад роботи програми:
// > console.log(showMonthName(5)); 
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number


class MonthException {
    constructor (message){
        this.name = message;
    }
}

let exception = new MonthException('Incorect month number');

const monthNames = [null, "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
function showMonthName(month){
    month = prompt("Enter the month number")
    if (!month || month > 12 || isNaN(month)){
    throw new Error (MonthException)}
    return monthNames[month];
    
}
 try {
     let result = showMonthName();
     console.log(result);
    } catch (e){
        console.log(exception)
    }
 
