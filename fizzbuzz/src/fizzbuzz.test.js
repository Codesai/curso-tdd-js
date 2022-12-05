import fizzbuzz from "./fizzbuzz";

describe('Fizzbuzz', () => {
  test("canary test", () => {
    expect(fizzbuzz()).toEqual(true);
  });
});
