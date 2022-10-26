function increaser(a, index) {
  let result = a;
  if (a > index) {
    result += index;
  }
  return result;
}
let a = 10;
let b = 5;
console.log("a: " + a + " b: " + b + " = " + increaser(a, b));
