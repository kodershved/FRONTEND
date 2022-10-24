let min = 1;
let max = 1000;
let sum = 0;
let boolean = false;

for (let i = min; i <= max; i++) {
  sum += i;
}
sum / 1234 > sum % 1234 ? (boolean = true) : (boolean = false);
console.log(boolean);
