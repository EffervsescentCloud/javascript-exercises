function repeatString(string, num) {
    let newString = ''
    for(let i = 0; i < num; ++i) {
        newString = newString + string
    }
    return newString
};

console.log(repeatString("hello", 4))
module.exports = repeatString