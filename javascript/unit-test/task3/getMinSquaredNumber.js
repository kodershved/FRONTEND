export const getMinSquaredNumber = (arr) => {
  if (Array.isArray(arr) && arr.length > 0) {
    const min = arr.reduce(
      (acc, element) =>
        acc > Math.abs(element) ? (acc = element) : (acc = acc),
      Math.abs(arr[0])
    );
    return min * min;
  }
  return null;
};
