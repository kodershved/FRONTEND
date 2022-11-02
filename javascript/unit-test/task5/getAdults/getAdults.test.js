import { getAdults } from "./getAdults.js";

it('Pass > { "John Doe": 19, Tom: 17, Bob: 18 } = {Bob: 18 }', () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(result).toEqual(expect.objectContaining({ "John Doe": 19, Bob: 18 }));
});
it("Pass > {} = {}", () => {
  const result = getAdults({});
  expect({}).toEqual(expect.objectContaining({}));
});
it("Pass > not object = {}", () => {
  const result = getAdults(1);
  expect({}).toEqual(expect.objectContaining({}));
});
