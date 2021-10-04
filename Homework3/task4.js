4. Напишіть функцію raiseToDegree(a,b), 
яка повертає результат піднесення числа a до степеня b. 
Функція працює тільки з цілими числами. 
Реалізувати інтерфейс введення чисел a, b з клавіатури.

function raiseToDegree (a,b){
    a = Number(prompt("Enter a 'A' Value"));
    b = Number(prompt("Enter a 'B' Value"));
    let result = a**b
    if (a % 1 ===0 && b %1 ===0){
    return result;
    }
    else{ console.log('Please, enter a valid data')
}
}
