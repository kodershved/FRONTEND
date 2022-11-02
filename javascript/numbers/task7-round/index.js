const superRound = (num, prec) => {
  // put your code here
  const number = Number(num);
  let roundArray = [];
  let dec = 1;
  for (let i = 0; i < prec; i++) {
    dec *= 10;
  }
  roundArray = [
    Math.floor(number * dec) / dec,
    Math.trunc(number * dec) / dec,
    Math.ceil(number * dec) / dec,
    Math.round(number * dec) / dec,
    Number(number.toFixed(prec)),
  ];

  return roundArray;
};

console.log(superRound(11.12556, 2));
