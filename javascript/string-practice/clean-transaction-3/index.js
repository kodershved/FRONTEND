//Task - clear string from garbage

//save transaction to array with split
//clean array element  = string
//clean space
//return clear array format $number
//round to 100

const cleanTransactionsList = (transaction) => {
  const garbage = [...transaction];
  const cleanArray = [];
  for (let i = 0; i < garbage.length; i++) {
    if (!isNaN(garbage[i])) {
      cleanArray.push(Number(garbage[i]).toFixed(2));
    }
  }

  return cleanArray.map((item) => "$" + item.slice(0));
};

let testString = [" 1.9", "16.4", 17, " 1 dollar", "one"];

console.log(cleanTransactionsList(testString));
