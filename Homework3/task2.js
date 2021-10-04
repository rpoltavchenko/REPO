2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. 
Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
Sample Output: 
"0 is even" 
"1 is odd" 
"2 is even" 

for (let i = 0; i <= 15; i++) {
        
    if (i %2 === 1){
        console.log (`${i} "1 is odd"`)}
        else if ( i === 0) {
            console.log (`${i} "0 is even"`)
            
        } else {
            console.log(`${i} "2 is even"`)            
        }
    }
