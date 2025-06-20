const findTheOldest = function(arr) {
    arr.reduce((oldest, current) => {
        if ('yearOfDeath' in oldest) {
            let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth
        } else {
            let oldestAge = 2025 - oldest.yearOfBirth
        }
        if ('yearOfDeath' in current) {
            let currentAge = current.yearOfDeath - current.yearOfBirth
        } else {
            let currentAge = 2025 - current.yearOfBirth
        }
        return (currentAge > oldestAge ? current : oldest)
    })
};

// Do not edit below this line
module.exports = findTheOldest;
