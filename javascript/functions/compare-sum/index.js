const sum = (numberFrom, numberTo) => {
  let result = 0;
  for (let i = numberFrom; i <= numberTo; i++) {
    result += i;
  }
  return result;
};

const compare = (firstFrom, firstTo, secondFrom, secondTo) => {
  if (sum(firstFrom, firstTo) > sum(secondFrom, secondTo)) return true;

  return false;
};
