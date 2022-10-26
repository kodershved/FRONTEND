const checkSum = (arr) => {
  // put your code here
  let sum = 0;
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    if (sum > 100) {
      return true;
    }
    return false;
  }
  return null;
};
