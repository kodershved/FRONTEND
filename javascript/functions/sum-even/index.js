function getSum(fromNumber, toNumber) {
  let sum = 0;
  for (let i = fromNumber; i <= toNumber; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}
