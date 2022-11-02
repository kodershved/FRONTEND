import { withdraw } from "./withdraw";

it('["Ann", "John", "User"], [1400, 87, -6], "John", 50 => 37', () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);
  expect(result).toEqual(37);
});
it('["Ann", "John", "User"], [1400, 87, -6], "John", 100 = -1', () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 100);
  expect(result).toEqual(-1);
});
it('["Ann", "John", "User"], [1400, 87, -6], "Ken", 100 = -1', () => {
  const result = withdraw(["Ann", "John", "User"], [1400, 87, -6], "Ken", 100);
  expect(result).toEqual(-1);
});
