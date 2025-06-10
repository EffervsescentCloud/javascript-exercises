function reverseString(string) {
    return string.split('').reverse().reduce((newString, letter) => (newString + letter))
};

console.log(reverseString("hello"))