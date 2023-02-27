const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, a) => sum + a, 0);
};

const multiply = function(array) {
  return array.reduce((product, a) => product * a, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let currentFact = 1;
	for (let i = 1; i <= a; i++) {
    currentFact *= i;
  }
  return currentFact;
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
