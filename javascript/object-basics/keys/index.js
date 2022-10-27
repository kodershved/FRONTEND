function getKeys(obj) {
  // put you code here
  for (let key in obj) {
    console.log(key);
  }
}
const user = {
  name: "Tom",
  age: 17,
};

getKeys(user);
