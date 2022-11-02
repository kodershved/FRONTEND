import { calc } from "./calculator";

it("1 + 10 = 11", () => {
  const result = calc("1 + 10");
  expect(result).toEqual("1 + 10 = 11");
});
it("1 + 1 = 2", () => {
  const result = calc("1 + 1");
  expect(result).toEqual("1 + 1 = 2");
});
it("100 + 100 = 200", () => {
  const result = calc("100 + 100");
  expect(result).toEqual("100 + 100 = 200");
});
it("10 - 2 = 8", () => {
  const result = calc("10 - 2");
  expect(result).toEqual("10 - 2 = 8");
});

it("2 - 10 = -8", () => {
  const result = calc("2 - 10");
  expect(result).toEqual("2 - 10 = -8");
});
it("1 * 0 = 0", () => {
  const result = calc("1 * 0");
  expect(result).toEqual("1 * 0 = 0");
});

it("3 * 2 = 6", () => {
  const result = calc("3 * 2");
  expect(result).toEqual("3 * 2 = 6");
});
it("10 / 2 = 5", () => {
  const result = calc("10 / 2");
  expect(result).toEqual("10 / 2 = 5");
});
it("If pass not string", () => {
  const result = calc(10 / 2);
  expect(result).toEqual(null);
});
