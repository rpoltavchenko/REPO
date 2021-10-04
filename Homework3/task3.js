3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. 
Випадкові числа генеруються із діапазону 1-500.

Sample Output:
randArray(5);  // 399,310,232,379,40


function randArray(k) {
let result = []
k = result.length;
result.push(randomInt());
console.log(result);
return result; 
}

function randomInt() {
    randInt = Math.floor(Math.random()* 500)+1; 
    return randInt;  
}
       

