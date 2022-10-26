function checker(arr) {
  let min = arr[0];
  let max = arr[0];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    if (min + max > 1000) {
      return true;
    }
    return false;
  }
  return null;
}
