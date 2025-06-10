function sumAll (num1, num2) {
    return Math.abs((1/2)*(num1**2 + num1) - (1/2)*(num2**2 + num2)) + (num2 > num1 ? num1 : num2)
};

console.log(sumAll(4, 2))
moodule.exports = sumAll