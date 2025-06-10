function sumAll (num1, num2) {
    if (!(num1.isInteger() && num2.isInteger())) {return 'ERROR'}
    return Math.abs((1/2)*(num1**2 + num1) - (1/2)*(num2**2 + num2)) + (num2 > num1 ? num1 : num2)
};

console.log(sumAll(4, 2))
module.exports = sumAll