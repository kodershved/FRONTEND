function getSpecialNumbers(from, to) {
  // put your code here

  let arr = [];
  let count = 0;
  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      arr[count] = i;
      count++;
    }
  }

  return arr;
}

// examples
getSpecialNumbers(1, 10); // ==> [3, 6, 9]
getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
getSpecialNumbers(1, 2); // ==> [ ]

console.log(getSpecialNumbers(1, 10));
