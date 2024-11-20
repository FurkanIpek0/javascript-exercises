const convertToCelsius = function(fahrenheitDegree) {
    let celciusDegree = (fahrenheitDegree - 32) * 5 / 9;
    celciusDegree = Number.isInteger(celciusDegree) ? celciusDegree : celciusDegree.toFixed(1);
    return +celciusDegree;
};

const convertToFahrenheit = function(celciusDegree) {
    let fahrenheitDegree = (9 / 5 * celciusDegree) + 32;
    fahrenheitDegree = Number.isInteger(fahrenheitDegree) ? fahrenheitDegree : fahrenheitDegree.toFixed(1);
    return +fahrenheitDegree;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
