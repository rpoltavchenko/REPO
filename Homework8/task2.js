function checkEmail(inputData) {
const expr = /\S+@\S+\. \S+/;
console.log(expr.test(inputData));
}
checkEmail(dreamaskus123@gmail.com);

