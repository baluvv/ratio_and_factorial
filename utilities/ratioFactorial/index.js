let factorialOfNumber = require("../factorial/index");
let ratioOfNumbers = require("../ratio/index");

const ratioAndFactorial = (a, b, c) => {
  const ratio = ratioOfNumbers(a, b);
  const factorial = factorialOfNumber(c);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
