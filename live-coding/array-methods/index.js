const numbersList = [5, 0, 8, 10, -4, 50, 220];

const mapRes = numbersList.map((el) => (el > 0 ? el * el : el));

//Формат callBack написав і вирішив автор

console.log(mapRes);

//find
//input:callback
//output:element|| undefind
const result = numbersList.find((element) => element > 100);
console.log(result);

//forEach - майже не використовується
//input:callback
//output: undefined

console.log("Task3");
const res = numbersList.forEach((el) => {
  //true
  if (el > 0) {
    console.log(el);
    return 1;
  }

  return "error";
  //false
  console.log(el > 0 ? el : "Error");
});
console.log(res);
