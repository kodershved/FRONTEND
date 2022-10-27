const getMessagesForBestStudents = (allStudentsList, failedStudentsList) => {
  const newArray = allStudentsList.filter(
    (name) => !failedStudentsList.includes(name)
  );
  const message = newArray.map((name) => "Good job, " + name);
  return message;
};

const allStudTest1 = ["Den", "John", "Ann", "Mike"];
const retakeStudTest1 = ["John", "Mike"];
getMessagesForBestStudents(allStudTest1, retakeStudTest1);
console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1));

const allStudTest2 = ["Den", "John", "Ann", "Mike"];
const retakeStudTest2 = ["Den", "John", "Ann", "Mike"];
console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2));
