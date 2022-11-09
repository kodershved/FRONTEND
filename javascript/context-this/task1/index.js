export const user = {
  firstName: "firstName",
  lastName: "lastName",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());
