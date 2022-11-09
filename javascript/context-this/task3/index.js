export const defer = (func, ms) => {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
};

const user = {
  name: "Oleg",
  sayName() {
    console.log(`HI ${this.name}`);
  },
};

let defSay = defer(user.sayName, 2000);

defSay(1);
