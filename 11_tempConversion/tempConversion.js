function convertToCelsius(temp) {
  return Math.round((temp - 32) * 50/9) / 10
};

function convertToFahrenheit (temp) {
  return Math.round(10 * (temp * 9/5) + 320) / 10
};

console.log(convertToCelsius(100))
console.log(convertToFahrenheit(100))
moodule.exports = {
  convertToCelsius,
  convertToFahrenheit
}
