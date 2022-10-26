console.log("hello");
function getSensOfLife() {
  return 42;
}

//option 1
const res = getSensOfLife();
console.log(res);

function getSquared(number) {
  return number * number;
}

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

console.log(sum(100000, 2000000000000));

console.log(sum([1, 2], [4, 6]));
console.log(sum("a", "b"));

function getMessage(age) {
  if (age < 0 || typeof age !== "number") {
    return null;
  }
  console.log("I am " + age + " years old");
}

getMessage("helo");
getMessage([1, 2, 3, 4]);
getMessage(1);
getMessage(34);
getMessage();
getMessage(null);

const mult = (first, second) => first * second;

console.log(mult(1, 5));
console.log(mult(100000, -5));
console.log(mult("1", "2"));
console.log(mult("A", 1));

const getMagicNumber = () => 17;

console.log(getMagicNumber());
