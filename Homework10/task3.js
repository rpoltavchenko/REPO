function mul(...rest) {
    let result = 1;
    let isNumber;

    for (let r of rest) {
        if (typeof r == 'number') {
            result *= r;
            isNumber = true;
        }
    }
    return isNumber ? result:0;
}


console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

