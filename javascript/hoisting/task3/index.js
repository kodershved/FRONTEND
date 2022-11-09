export const createArrayOfFunctions = (number) => {
  var array = [];

  if (number) {
    if (typeof number !== "number") return null;
    for (let i = 0; i < number; i++) {
      array[i] = () => i;
    }
  }
  return array;
};

console.log(createArrayOfFunctions(2));
