const getTotalRevenue = (transactions) => {
  // put your code here
  const newArrays = Object.values(transactions).map(
    (element) => element["amount"]
  );
  return newArrays.reduce((acc, element) => acc + element, 0);
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: "sell" },
  { userId: 22, amount: 160, operation: "buy" },
  { userId: 44, amount: 90, operation: "sell" },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);
