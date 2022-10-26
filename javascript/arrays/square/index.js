function squareArray(arr) {
  // put your code here
  if (Array.isArray(arr)) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray.push(Math.pow(arr[i], 2));
    }
    return newArray;
  }

  return null;
}
