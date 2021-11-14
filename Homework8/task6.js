let checkEmail = function (str) {
    const regChain = /^[a-zA-Z)0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

    if (regChain.test(str)) {
        alert("Email is correct!");
    } else {
        alert("Email is not correct. Please, try again");
    }

}

checkEmail("my_mail@gmail.com");
checkEmail("my_mail@gmail.com");