function reverseString(string) {
    if (string === '') {return ''}
    return string.split('').reverse().reduce((newString, letter) => (newString + letter))
};

console.log(reverseString("hello"))
module.exports = reverseString