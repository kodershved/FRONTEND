let min = 0;
let max = 1000;
let sum = 0;

for (let i = min; i <= max; i++) {
  if (i % 2 != 0) {
    console.log("Found");
    sum += i;
  }
}

if (sum * 5 > 5000) {
  console.log("Bigger");
} else {
  console.log("Smaller or equal");
}
