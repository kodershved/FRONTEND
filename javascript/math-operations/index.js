let start = 1;
let end = 10;
let result = 0;
let number = 0;

for (let i = start; i <= end; i++) {
  number = i;
  if (number % 5 == 0) {
    console.log(number);
  } else if (number % 2 == 0 && number % 4 != 0) {
    result += number;
  } else if (number % 3 == 0) {
    result -= number;
  } else if (number % 4 == 0) {
    result = result * number;
  }
}
