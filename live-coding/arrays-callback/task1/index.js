const numbersList1 = [1, 2, 3, 4, 5];

console.log("BEFORE POP", numbersList1);
const popRes = numbersList1.pop();
console.log(popRes);
console.log("AFTER POP", numbersList1);

const pushRes = numbersList1.push();
console.log("AFTER PUSH", pushRes);
numbersList1.push(10);
console.log("AFTER PUSH", numbersList1);

const numbersList2 = [1, 2, 3, 4, 5];
const resultNubmerList = numbersList2.unshift();
console.log("BEFORE UNSHIFT", numbersList2);
console.log("Return Unshift ", resultNubmerList);
