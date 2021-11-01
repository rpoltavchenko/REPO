// 2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
// 	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
// 	- нечислове значення
// 	- вік юзера менше 14 років. 
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.


function checkAge() {
        let age = prompt("How old are you?");
        if (!age) {
             throw new Error("The field is empty! Please enter your age");
        } else if (age > 0 && age <= 14 ) {
            throw new Error("Access denied. Your age is under 14");
        } else if (isNaN(age)) {
            throw new Error("Access denied. Enter the vald Data");
        } else {
            alert("Access granted. Now, You can watch the movie")
        }
    }
    
    try {
        let result = checkAge();
        console.log(result);
    } catch (error) {
        alert(error.name);
        alert(error.message);
    }

  