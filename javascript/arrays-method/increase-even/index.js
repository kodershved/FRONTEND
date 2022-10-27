const increaseEvenEl = (arr, delta) => {
  if (Array.isArray(arr)) {
    return arr
      .slice()
      .map((number) => (number % 2 === 0 ? number + delta : number));
  }
  return null;
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
