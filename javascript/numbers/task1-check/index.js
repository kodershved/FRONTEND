//<p>Создайте функции, которые будут искать указанные числа в массиве</p>

const getFiniteNumbers = (arr) =>
  arr.filter((element) => Number.isFinite(element));

const testArray = ["a", "1", "-", 2, 5, 7, "f", 5.6, "9"];
console.log(getFiniteNumbers(testArray));

const getFiniteNumbersV2 = (arr) => arr.filter((element) => isFinite(element));

const getNaN = (arr) => arr.filter((element) => Number.isNaN(element));

const getNaNV2 = (arr) => arr.filter((element) => isNaN(element));

const getIntegers = (arr) => arr.filter((element) => Number.isInteger(element));
console.log(getIntegers(testArray));
