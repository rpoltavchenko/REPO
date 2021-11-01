// 1. Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри
// ширина прямокутника width і висота прямокутника height і обраховує його площу. 
// Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw 'Parameter is not a number!';
    } else {
        return width * height;
    }
  }  
  try {
    calcRectangArea (3, 7);
  } catch (e) {
    console.error(e);
  }