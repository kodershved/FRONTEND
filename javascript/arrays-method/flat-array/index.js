const flatArray = (arr) => {
  const newArray = [...arr].reduce((acc, element) => acc.concat(element), []);
  newArray.sort((a, b) => a - b);
  return newArray;
};

console.log(flatArray([[1, 2, 3, 5, 6], [2, 6, 7, 9], 9]));

// .reduce((acc, element) => acc.concat(element), [])
// .sort((a, b) => a - b);
