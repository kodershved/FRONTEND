const user = {
  name: "Sam",
};

function addPropertyV1(userData, userId) {
  // put your code here
  userData.id = userId;

  return userData;
}

// addPropertyV1(user, "1234567");

// console.log(user);

function addPropertyV2(userData, userId) {
  // put your code here
  return Object.assign(userData, { id: userId });
}

// addPropertyV2(user, "1234567");

// console.log(user);

function addPropertyV3(userData, userId) {
  // put your code here
  const newObj = Object.assign({}, userData);
  return Object.assign(newObj, { id: userId });
}

// console.log(user);

// console.log(addPropertyV3(user, "1234567"));

function addPropertyV4(userData, userId) {
  // put your code here
  const newObj = { ...{ id: userId }, ...userData };
  return newObj;
}

// console.log(user);

// console.log(addPropertyV4(user, "1234567"));
