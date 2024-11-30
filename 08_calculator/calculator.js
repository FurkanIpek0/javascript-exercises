const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(...args) {
	return args[0].reduce((sum, currenValue) => currenValue + sum, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(number, power) {
	return Math.pow(number, power);
};

const factorial = function(number) {
  let factorial = 1;
	for (i = number; i > 1; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
