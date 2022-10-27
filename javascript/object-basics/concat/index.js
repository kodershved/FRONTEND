const concatProps = (obj) => {
  // put your code here
  const newArray = [];
  for (let value in obj) {
    newArray.push(obj[value]);
  }
  return newArray;
};

console.log(concatProps({ name: "John Doe", age: 17, interest: "football" }));
