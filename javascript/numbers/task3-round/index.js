const multiRound = (roundNumber) => {
  //   const roundNumber = Number(num.toFixed(2));
  const dec = 100;
  const arr = [
    Math.floor(roundNumber * dec) / dec,
    Math.trunc(roundNumber * dec) / dec,
    Math.ceil(roundNumber * dec) / dec,
    Math.round(roundNumber * dec) / dec,
    Number(roundNumber.toFixed(2)),
  ];
  return arr;
};

console.log(multiRound(11.12556));
