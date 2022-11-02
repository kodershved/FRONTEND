const getRandomNumbers = (length, from, to) => {
  // put your code here
  let min = Math.ceil(from);
  let max = Math.ceil(to);
  let arr = new Array(length);

  if (max > min) {
    return arr
      .fill(0, 0, length)
      .map((items) => Math.floor(Math.random() * (max - min) + min));
  }

  return null;
};

//Math.floor(Math.random() * (max - min) + min)

console.log(getRandomNumbers(5, 1.4, 3.22));
