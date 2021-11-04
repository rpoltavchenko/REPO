let firstMsg = prompt('Please, enter the first message', "");
let secondMsg = prompt('Please, enter the second message', "");

let firstInput = document.querySelector('#input1');
let secondInput = document.querySelector('#input2');

firstInput.value = firstMsg;
secondInput.value = secondMsg;

let reverseFirstValue = firstInput.value;
let reverseSecondValue = secondInput.value;

firstInput.value = reverseSecondValue;
secondInput.value = reverseFirstValue;