//Function - count substring in string

//Name - countOccurrences
//object = null ? defaul object is ' ';
//string emty? return null
//return number - count

//check if object = null use default ' '
//check if string = null return null is true
//create count = 0;
//search object in string if true count++
//return count

const countOccurrences = (str, subStr) => {
  let object = " ";
  let countString = 0;

  if (str !== "" && subStr !== "") {
    let strArray = [];
    if (typeof subStr === "string") {
      object = subStr;
      strArray = str.split(" ");
      let countEmty = strArray.reduce(
        (acc, element) => acc + element.length,
        0
      );
      countString = str.length - countEmty;
    }

    let countStrInArray = strArray.filter((element) =>
      element.includes(object)
    ).length;

    return countStrInArray;
  }
  return null;
};

console.log(countOccurrences(" "));
