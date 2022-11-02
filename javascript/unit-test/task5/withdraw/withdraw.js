export function withdraw(clients, balances, client, amount) {
  let index = 0;
  let found = false;
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
      found = true;
      index = i;
    }
  }
  if (balances[index] >= amount && found) {
    balances[index] -= amount;
    return balances[index];
  }
  return -1;
}
