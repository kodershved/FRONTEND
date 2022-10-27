const arrAverage = (arr) => {
  if (Array.isArray(arr)) {
    return arr.reduce((sum, num) => sum + num) / arr.length;
  }
  return null;
};

console.log(arrAverage([2, 2, 2, 4]));
