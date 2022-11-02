//Revision A
const splitText = (str, number) => {
  let num = 10;

  if (Number(number)) num = number;
  if (typeof str === "string") {
    const strArray = [];
    let count = 0;

    while (true) {
      let tmp = str.substr(count, num);
      if (tmp.length === 0) break;
      strArray.push(tmp[0].toUpperCase() + tmp.slice(1));
      count += num;
    }
    return strArray.join("\n");
  }
  return num;
};

console.log(splitText("hello where are you leave"));

//Revision B

const splitTextB = (str, number) => {
  let num = 10;

  if (Number(number)) num = number;
  if (typeof str === "string") {
    let strArray = ``;
    let tmp = "";
    for (let i = 0; i < str.length; i++) {
      tmp += str[i];
      if (tmp.length === num) {
        tmp = tmp[0].toUpperCase() + tmp.substring(1, tmp.length);
        strArray += tmp + "\n";
        tmp = "";
      }
    }

    return strArray;
  }
  return null;
};
