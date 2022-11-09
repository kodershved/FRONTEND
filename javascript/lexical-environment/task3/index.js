let memo = 0;
export const add = (number) => {
  memo += number;
};
export const decrease = (number) => {
  memo -= number;
};
export const reset = (number) => {
  memo = 0;
};
export const getMemo = (number) => {
  return memo;
};
