function sumAll (num1, num2) {
    if (!(Number.isInteger(num1) && Number.isInteger(num2)) | num1 < 0 | num2 < 0) {return 'ERROR'}
    return Math.abs((1/2)*(num1**2 + num1) - (1/2)*(num2**2 + num2)) + (num2 > num1 ? num1 : num2)
};

console.log(sumAll(4, 2))
module.exports = sumAll