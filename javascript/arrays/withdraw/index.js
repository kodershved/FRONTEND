function withdraw(clients, balances, client, amount) {
  let index = 0;
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      index = i;
    }
  }
  if (balances[index] >= amount) {
    balances[index] -= amount;
    return balances[index];
  }
  return -1;
}

console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10));
