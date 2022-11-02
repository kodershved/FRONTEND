//function get expression and must return result

//parsing expression
//save in values
//if type expression is + sum element in values
//if type expression is - substrac elemnt in values
//return result

const calc = (expression) => {
  const [a, operator, b] = expression.split(" ");
  let result;
  switch (operator) {
    case "+":
      result = Number(a) + Number(b);
      break;
    case "-":
      result = Number(a) - Number(b);
      break;
    case "*":
      result = Number(a) * Number(b);
      break;
    case "/":
      result = Number(a) / Number(b);
      break;
    default:
      break;
  }

  return a + " " + operator + " " + b + " = " + result;
};

console.log(calc("10 / 2"));
