const rooms = {
  room1: [{ name: "Jack" }, { name: "Bob" }, { name: "Anton" }],
  room2: [{ name: "Michel" }, { name: "Jan" }, { name: "Sem" }],
  room3: [{ name: "Petro" }, { name: "Vova" }, { name: "Olya" }],
  room4: [{ name: "Agata" }, { name: "Andriy" }],
};

const getPeople = (obj) => {
  const newArrays = Object.entries(obj);
  if (newArrays.length > 0) {
    const result = newArrays.reduce((acc, element) => acc.concat(element), []);
    return result;
  }

  return newArrays;
};

console.log(getPeople({ rooms }));
