function finalizeNumber(number) {
  if (number % 2 == 0) {
    return "is a even number";
  } else {
    return "is an odd number";
  }
}

// ========PUT YOUR NUMBER BELLOW===========
let inputNumber = 21;
// =========================================

let finalResult = finalizeNumber(inputNumber);
console.log("the number", inputNumber, finalResult);
