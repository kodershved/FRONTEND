let message = "Just learn it";

export const sendMessage = (name) => {
  console.log(`${name}, ${message}! Your Gromcode`);
};
sendMessage("Ann");
export const setMessage = (newMessage) => {
  message = newMessage;
};
