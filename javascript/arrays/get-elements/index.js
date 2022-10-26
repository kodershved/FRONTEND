function getArrayBounds(arr) {
  // put your code here
  let result = [];
  if (Array.isArray(arr)) {
    result = [arr.length, arr[0], arr[arr.length - 1]];

    return result;
  }
  return null;
}

// examples
getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
getArrayBounds(10, 12, 14); // ==> null
getArrayBounds([1]); // ==> [1, 1, 1]

console.log(getArrayBounds([1]));
