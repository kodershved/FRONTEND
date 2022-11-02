const getTotalPrice = (arr) => {
  let sum = arr
    .map((element) => Number(element))
    .reduce((sum, num) => sum + num);

  return `$${Math.floor(sum * 100) / 100}`;
};

console.log(getTotalPrice([1 / 2, 5, 1.713, 0.341]));
