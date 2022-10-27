function uniqueCount(array) {
  const newArray = [];
  newArray.push(array[0]);
  let unique = false;
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      unique = false;
      for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] !== array[i]) {
          unique = true;
        } else {
          unique = false;
          break;
        }
      }

      if (unique) {
        newArray.push(array[i]);
      }
    }
    return newArray.length;
  }

  return null;
}

console.log(uniqueCount([1, 1, 3, 5, 2, 69, 3, 4, 5, 5]));
