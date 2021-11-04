const newImg = document.getElementsByClassName('image');
for (let img of newImg){
    img.src = "cat.jpg"
    alert (newImg.outerHTML);
} 
