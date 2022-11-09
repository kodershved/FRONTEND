var arr = [];

for (let i = 0; i < 10; i += 1) {
  arr[i] = function index() {
    return i;
  };
}
console.log(arr[3]());
export { arr };
