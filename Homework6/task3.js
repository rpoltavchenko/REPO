let elements = document.querySelectorAll('#text p');
// for (let el of elements){
//     alert (`Selector text ${el} + ": " + elements.inn);
// }

for (let i =0; i< elements.length; i++){
    alert ("Selector text" + i + ": " + elements[i].innerHTML);
}