// This is the file where the math modules are located.

function addition(firstNumber, secondNumber) {
  return `The addition is: ${firstNumber + secondNumber}`;
}

function subtraction(firstNumber, secondNumber) {
  return `The subtraction is: ${firstNumber - secondNumber}`;
}

function multiplication(firstNumber, secondNumber) {
  return `The multiplication is: ${firstNumber * secondNumber}`;
}

function division(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return "It is not possible to do the division by 0";
  } else {
    return `The division is: ${firstNumber / secondNumber}`;
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
