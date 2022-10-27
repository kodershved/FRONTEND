const transformToObject = (arr) => {
  // put your code here
  const newObject = {};
  arr.forEach((element) => {
    newObject[element] = element;
  });

  return newObject;
};

console.log(transformToObject(["a", 17.1, "John Doe"]));
