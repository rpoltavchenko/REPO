// Заданий масив з елементами [2, 3, 4, 5]. 
// За допомогою циклу for знайдіть добуток елементів цього масиву. Також реалізуйте завдання через while.

let arr = [2,3,4,5];
let total = 1;

for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
} 

console.log(total);


let arr = [2,3,4,5];
let total = 1;
let i = 0;
while (i<arr.length) { 
    total*=arr[i];
    i++;
    console.log(total);   
}

