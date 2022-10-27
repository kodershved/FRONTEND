const reverseArray = (arr) => {
  if (Array.isArray(arr)) {
    return arr.slice().reverse();
  }
  return null;
};

console.log(reverseArray([2, 0, 9, 4, 5]));
