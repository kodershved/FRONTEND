export const user = {
  firstName: "oleg",
  lastName: "shved",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  setFullName(fullName) {
    const arr = fullName.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  },
};

user.setFullName("Rybak Vova");

console.log(user.getFullName());
