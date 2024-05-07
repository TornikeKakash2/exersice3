// დავალება 1

function subtract(a, b) {
  return a / b;
}

subtract(12, 4);

// დავალება 2

const subtract = function (a, b) {
  return a / b;
};

subtract(12, 4);

// დავალება 3

const multiply = (a, b) => a * b;

multiply(2, 3);

// დავალება 4

function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

isPositive(24);

// დავალება 5

function getSquare(number) {
  return number.Math.pow(2);
}

getSquare(9);

// დავალება 6

function printDetails(name, age, profession) {
  alert(`${name}, ${age}, ${profession}`);
}

printDetails("Tornike", 20, "Web developer");

// დავალება 7

const array = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  function sumNumbers() {
    sum = array[i] + array[i];
  }
}
sumNumbers();
