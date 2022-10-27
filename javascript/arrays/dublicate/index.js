function removeDuplicates(array) {
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
    return newArray;
  }

  return null;
}

console.log(removeDuplicates([1, 9, 3, 2, 18, 56, 2, 9, 3]));
