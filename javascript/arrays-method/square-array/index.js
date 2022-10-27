function squareArray(arr) {
  // put your code here

  if (Array.isArray(arr)) {
    return arr.map((number) => number * number);
  }

  return null;
}

console.log(squareArray([0, 2, 3, 4]));
