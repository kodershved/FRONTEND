const createCalculator = () => {
  let mem = 0;
  function add(num) {
    mem += num;
  }

  function decrease(num) {
    mem -= num;
  }

  function reset() {
    mem = 0;
  }

  function getMemo() {
    return mem;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

let calc1 = createCalculator();
console.log(calc1.getMemo());
calc1.add(10);
console.log(calc1.getMemo());
calc1.decrease(5);
console.log(calc1.getMemo());
console.log("Calc2");
let calc2 = createCalculator();
console.log(calc2.getMemo());
calc2.add(2);
console.log(calc2.getMemo());
