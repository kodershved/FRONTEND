function getSpecialNumbers(array) {
  const newArray = array.filter((num) => num % 3 === 0);

  return newArray;
}

console.log(getSpecialNumbers([1, 4, 6, 7, 8, 9]));
