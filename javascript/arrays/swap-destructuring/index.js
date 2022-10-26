function swap(numbers) {
  // put your code here
  const [a, ...arr] = numbers;
  return [...arr, a];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  // put your code here
  const first = numbers[0];
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i]);
  }
  newArray.shift();
  newArray.push(first);
  return newArray;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]

console.log(swap([1, 10, 9, 11]));
console.log(swapManual([1, 10, 9, 11]));
