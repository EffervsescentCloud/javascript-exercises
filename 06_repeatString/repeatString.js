function repeatString(string, num) {
    let newString = ''
    if (num >= 0) {
        for(let i = 0; i < num; ++i) {
            newString = newString + string
        }
        return newString
    } else {
        return "ERROR"
    }
};

console.log(repeatString("hello", 4))
module.exports = repeatString