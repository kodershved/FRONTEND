//Task - programm must divide string
//Name - splitString
//to some length part and save to array
//1.Function must get two arguments, first is string second is number
//number value is number of symbols
//2.Function must return array with strings
//3.The last of string must include count number to load necessary length
//4.If not string -> null
//5.If not number -> deffault = 10;

///algo!!!
//create default value = 10
//if number is ok value = number
//if strings is empty or false return null
//divide string to by number
//save in array
//last substring > and length<number + points

const splitString = (str, length) => {
  if (typeof str === "string") {
    let lengthSymbol = 10;
    if (typeof length === "number") {
      lengthSymbol = length;
    }
    let stringLength = 0;
    const arrayString = [];
    while (true) {
      let partString = str.substr(stringLength, lengthSymbol);
      if (partString.length === 0) {
        break;
      }
      if (partString.length < lengthSymbol) {
        let stringPoint = ".".repeat(lengthSymbol - partString.length);
        partString = partString.concat(stringPoint);
      }
      stringLength += lengthSymbol;

      arrayString.push(partString);
    }
    return arrayString;
  }
  return null;
};

console.log(splitString("hello my name is oleg", 4));
