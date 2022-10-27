const filterNames = (arr, text) => {
  const newArray = arr.filter(
    (element) => element.length > 5 && element.includes(text)
  );
  return newArray;
};

console.log(
  filterNames(["hello Denden rat", "Johnjohn", "Annann", "Mikemike"], "Denden")
);
