const getSubArray = (arr, numberOfElements) => {
  // put your code here
  const newArray = [];
  for (let i = 0; i < numberOfElements; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
};

console.log(getSubArray([1, 2, 3, 4, 5, 6], 3));
