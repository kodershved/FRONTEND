function sortAsc(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] > arr[j + 1]) {
          let swap = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = swap;
          wasSwap = true;
        }
      }
      if (!wasSwap) break;
    }
    return arr;
  }
  return null;
}

function sortDesc(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if (arr[j] < arr[j + 1]) {
          let swap = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = swap;
          wasSwap = true;
        }
      }
      if (!wasSwap) break;
    }
    return arr;
  }
  return null;
}
