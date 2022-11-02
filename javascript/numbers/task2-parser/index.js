const getParsedIntegers = (arr) =>
  arr.map((element) => Number.parseInt(element));

const testArray = [" 10 age", "6", 1.4, "1.9"];
console.log(getParsedIntegers(testArray));

const getParsedIntegersV2 = (arr) => arr.map((element) => parseInt(element));

console.log(getParsedIntegersV2(testArray));

const getParsedFloats = (arr) =>
  arr.map((element) => Number.parseFloat(element));
const getParsedFloatsV2 = (arr) => arr.map((element) => parseFloat(element));
console.log(getParsedFloatsV2(testArray));
