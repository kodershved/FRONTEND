const withdraw = (clients, balances, client, amount) => {
  const newArray = balances.slice();
  if (newArray[clients.indexOf(client)] >= amount) {
    newArray[clients.indexOf(client)] -= amount;
    return newArray[clients.indexOf(client)];
  }
  return -1;
};

console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));
