import passwordValidator from "./passwordValidator";

describe('Password validator', () => {
  test("canary test", () => {
    expect(passwordValidator('foo')).toEqual(false);
  });
});