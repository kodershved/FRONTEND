const getAdults = (obj) => {
  // put your code here
  const adults = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      adults[key] = obj[key];
    }
  }
  return adults;
};

// examples
const test = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
const test2 = { "John Doe": 19, Bob: 18 };
console.log(test === test2);
