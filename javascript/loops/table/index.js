let n = 1;
let m = 5;

for (let i = n; i <= m; i++) {
  for (let j = n; j <= m; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
  console.log("=> " + i + " <=");
}
