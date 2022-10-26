function cloneArr(arr) {
  const newArr = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  return null;
}

console.log(cloneArr([1, 2, 3, 4, 6]));
