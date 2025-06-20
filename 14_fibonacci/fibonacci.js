const fibonacci = function(n) {
    let num1 = 0 
    let num2 = 1
    odd = true
    for (let i=1; i<=n; ++i){
        if (odd) {
            num1 += num2
            odd = false
        } else {
            num2 += num1
            odd = true
        }
    }
    return (odd ? (num1) : (num2))
};

// Do not edit below this line
module.exports = fibonacci;
