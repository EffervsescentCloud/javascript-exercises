function leapYears(year) {
    return (year % 400 === 0) | (year % 4 === 0 && !(year % 100 === 0))
}
console.log(leapYears(2000))
console.log(leapYears(1900))
console.log(leapYears(2020))
console.log(leapYears(1999))