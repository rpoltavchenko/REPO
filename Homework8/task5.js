 function checkNum(str) {
     const expr = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
     let result = expr.test(str);
     if (result) {
         console.log('Vaildation confirmed');
     } else {
         console.log('Incorrect data');
     }
     
 }