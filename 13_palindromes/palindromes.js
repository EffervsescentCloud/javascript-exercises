const palindromes = function (string) {
    string = string.replace("!", "").replace(",", "").replace(".", "")
    string = string.toLowerCase()
    let value = true
    for (let i = 0; i <= floor(string.length / 2); ++i) {
        if (!(string[i] == string[string.length - 1])) {
            value = false
        }
    }
    return value
};

// Do not edit below this line
module.exports = palindromes;
