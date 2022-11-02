import { getMinSquaredNumber } from "./getMinSquaredNumber";

it("If pass empty array", () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it("if pass string 'hello' ", () => {
  const result = getMinSquaredNumber("hello");
  expect(result).toEqual(null);
});

it("If return squared minimall number in array", () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
