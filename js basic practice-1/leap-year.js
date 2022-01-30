function selectYear(year) {
  if (year % 2 == 0 && year % 400) {
    return " is leap-year";
  } else {
    return "is not leap-year";
  }
}

// =======PUT YOUR YEAR BELLOW==========
let checkLeapYear = 2021;
// =====================================

let resultLeapYear = selectYear(checkLeapYear);
console.log("the year", checkLeapYear, resultLeapYear);
