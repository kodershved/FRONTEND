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
getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }

console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }));
