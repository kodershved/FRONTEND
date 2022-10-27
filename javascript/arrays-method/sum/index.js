const sum = (arr) => {
  if (Array.isArray(arr)) {
    return arr.reduce((sum, num) => sum + num);
  }
  return null;
};

console.log(sum([1, 2, 3, 4]));
