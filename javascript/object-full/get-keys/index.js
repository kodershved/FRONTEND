const getKeys = (obj) => {
  const values = Object.keys(obj);
  for (const value of values) {
    console.log(value);
  }
};

getKeys({ name: "Denis", city: "Warsaw", englishLevel: "A1" });
