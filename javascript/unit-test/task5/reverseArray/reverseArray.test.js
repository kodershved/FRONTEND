import { reverseArray } from "./reverseArray";

it("Pass not array argument - number 5", () => {
  const result = reverseArray(5);
  expect(result).toEqual(null);
});
it("Pass array [1,2,3,4,5] = [5,4,3,2,1]", () => {
  const result = reverseArray([1, 2, 3, 4, 5]);
  expect(result).toEqual([5, 4, 3, 2, 1]);
});
it("Check if passed array not changed [1,2,3,4,5] =[1,2,3,4,5]", () => {
  const arr = [1, 2, 3, 4, 5];
  const result = reverseArray(arr);
  expect([1, 2, 3, 4, 5]).toEqual(arr);
});
