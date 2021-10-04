6. Напишіть функцію findUnique(arr), яка приймає масив arr 
і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні 
(не мають дублів), то функція поверне true, інакше - false.
Sample Output:
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true

function testUnique(A)
{   
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = i+1; j < n; j++)
        { if (A[ i ] === A[j]) return true; }
     }
    return false;
}
