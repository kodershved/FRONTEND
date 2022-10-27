/* eslint-disable no-restricted-syntax */
const pickProps = (obj, props) => {
  // put your code here

  const newObj = {};
  for (const element of props) {
    for (const key in obj) {
      if (key === element) {
        newObj[key] = obj[key];
      }
    }
  }

  return newObj;
};

// examples
pickProps({ a: 1, b: 2, c: 3 }, ["a", "c"]); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ["a", "c", "d", "hex"]); // ==> { a: 1, c: 3 }

console.log(pickProps({ a: 1, b: 2, c: 3 }, ["a", "c", "d", "hex"]));
