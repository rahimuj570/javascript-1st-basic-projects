// ==========USING DECREASING MOOD==========
function input(number) {
  let init = 1;
  let inputNumber = number;
  while (inputNumber >= 1) {
    init = init * inputNumber;
    inputNumber--;
  }
  return init;
}
console.log(input(6));

// =============USING INCREASING MOOD==========
function input2(number2) {
  let init2 = 1;
  let inputNumber2 = 1;
  while (number2 >= 1) {
    inputNumber2 = init2 * inputNumber2;
    init2++;
  }
  return inputNumber2;
}
console.log(input2(6));
