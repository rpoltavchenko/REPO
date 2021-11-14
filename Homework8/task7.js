function checkLogin(inputData) {
    const expr = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
    let needNumber = /[0-9\.]+/g;
    let finalNumber = inputData.match(needNumber);
    let result = expr.test(inputData);

    console.log(`The ${inputData} is ${result} - ${finalNumber}`);
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');

