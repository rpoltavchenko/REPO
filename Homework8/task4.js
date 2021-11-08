const expr = /(\w+)\s(\w+)/;
const str = 'Java Script';
const checkStr = str.replace(expr, '$2, $1');

console.log(checkStr);