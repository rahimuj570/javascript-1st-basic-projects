function input(hour) {
  return hour * 3600000;
}

// =======PUT NUMBER OF HOUR BELLOW=======
let inputNumber = 29;
// =======================================

let result = input(inputNumber);
console.log(inputNumber, "hr is equal to", result, "milliseconds");
