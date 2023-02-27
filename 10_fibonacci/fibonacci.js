const fibonacci = function(number) {

    if (number < 0) {
        return "OOPS";
    }

    number = Number(number);
    let a = 0;
    let b = 1;
    let c = 1;

    for (let i = 0; i < number - 1; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};  

// Do not edit below this line
module.exports = fibonacci;
