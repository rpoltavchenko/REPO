let array = [];
array[0]=100;
array[1]="billions"
array[2]= false;
array[3]= null;

console.log (array.length);

let newElement = prompt("Enter new element of Array");
array[4]= newElement;
console.log(array[5]);

let firstItem = array.shift();
console.log (array);
