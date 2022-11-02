const testMap = (arr) => arr.map((element) => element + 2);

console.log(testMap([1, 2, 3, 4, 5]));

const getMaxAbsoluteNumber = (arr) => {
  // put your code here

  if (arr.length > 0 && Array.isArray(arr)) {
    const newArray = arr.map((element) => Math.abs(element));

    return Math.max(...newArray);
  }
  return null;
};

console.log(getMaxAbsoluteNumber([1, 2, -3, 4, -5]));
