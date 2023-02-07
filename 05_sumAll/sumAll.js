const sumAll = function(lower, upper) {
    let start = Math.min(lower, upper);
    let end = upper;
    if (start == upper) {
        end = lower;
    } 
    let sum = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return 'ERROR';
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
