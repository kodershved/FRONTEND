//Sort phone book to other method

//algo
//check if array
//check type sort
//if true grow
//if false fall
//sort array
//save and return
//tests

const sortContacts = (phoneBook, typeSort) => {
  if (Array.isArray(phoneBook)) {
    let sortedPhoneBook = [];
    if (typeSort === true || !typeSort) {
      sortedPhoneBook = phoneBook.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (typeSort === false) {
      sortedPhoneBook = phoneBook.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return sortedPhoneBook;
  }
  return null;
};

const book = [
  { name: "Tom", phoneNumber: "777" },
  { name: "Anton", phoneNumber: "444" },
  { name: "Sasha", phoneNumber: "222" },
  { name: "Oleg", phoneNumber: "999" },
];

console.log(sortContacts(book, true));
