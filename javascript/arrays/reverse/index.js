function reverseArray(arr) {
  const newArray = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      newArray.unshift(arr[i]);
    }
    return newArray;
  }
  return null;
}

console.log(reverseArray([1, 2, 3, 4]));
