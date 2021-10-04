3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. 
Випадкові числа генеруються із діапазону 1-500.

Sample Output:
randArray(5);  // 399,310,232,379,40

function randArray(k) {
let l = k-1;
let min = 1;
let max = 500;

let result = []
for (let i = 0; i<=l; i++){
result.push(randomInt(min,max))
}

return result; 
}

function randomInt(min,max) {
    let rand = min -0.5+Math.random()*(max-min+1);
    rand=Math.round(rand); 
    return rand;  
}
       

