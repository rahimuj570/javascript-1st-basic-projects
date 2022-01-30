// ==========USING INCREASING MOOD===========
function input(number) {
  let factorial = 1;
  for (let i = 1; i >= 1; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
console.log(input(6));

// ==============USING DECREASING MOOD=========
function input2(number2) {
  let init = 1;
  for (let i = number2; i >= 1; i--) {
    init = init * i;
  }
  return init;
}
console.log(input2(6));
