const increaseEvenEl = (arr, delta) => {
  // put your code here
  const newArray = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        newArray.push(arr[i] + delta);
      } else {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
  return null;
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
