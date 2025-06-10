function removeFromArray(array, ..._args) {
    for (let i = 0; i < _args.length; ++i) {
        let forRemoval = _args[i]
        let index = array.findIndex(item => item === forRemoval)
        array = [
            ...array.slice(0, index),
            ...array.slice(index + 1)
        ]
    }
    return array
};

console.log(removeFromArray([1,2,3,4,5,6,7,8,9,10], 5, 4))
