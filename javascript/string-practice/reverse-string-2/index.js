const reverseString = (text) => {
  if (typeof text === "string") {
    const array = text.split("");
    return array.reverse().reduce((acc, item) => acc + item, "");
  }
  return null;
};

console.log(reverseString("Hello 4"));
