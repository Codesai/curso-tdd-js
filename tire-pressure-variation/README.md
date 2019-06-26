# Tire Pressure Monitoring System Variation

## Goal
Be able to test `Alarm`'s `check` function without changing the method signature.

1. Test the code using test doubles created by you.

2. Test the code using test doubles created with a library.

## Tools
* [Jest](https://jestjs.io/en/)
* [Expect - Jest](https://jestjs.io/docs/en/expect.html)
* [Mock Functions - Jest](https://jestjs.io/docs/en/mock-functions)

### Example of spying an interaction
```javascript
class MyClass {
  constructor(collaborator) {
    this.collaborator = collaborator;
  }

  run() {
    this.collaborator.collaborate();
  }
}

test('example of a spying an interaction', () => {
  const collaborator = {collaborate: jest.fn()};
  const myClass = new MyClass(collaborator);

  myClass.run();

  expect(collaborator.collaborate).toHaveBeenCalledTimes(1);
});
```

### Example of stubbing an interaction

```javascript
class MyClass {
  constructor(collaborator) {
    this.collaborator = collaborator;
  }

  run() {
    return this.collaborator.collaborate();
  }
}

test('example of a stubbing an interaction', () => {
  const collaboratorResponse = "some response";
  const collaborator = {collaborate: jest.fn()};
  collaborator.collaborate.mockReturnValueOnce(collaboratorResponse);
  const myClass = new MyClass(collaborator);

  const result = myClass.run();

  expect(result).toBe(collaboratorResponse);
});
```

## Learnings
How to build a Spy and a Stub manually.

How to use Jest to generate the test doubles.

## References

Based on an exercise from [Luca Minudel](https://twitter.com/lukadotnet?lang=en)'s [TDD with Mock Objects And Design Principles exercises](https://github.com/lucaminudel/TDDwithMockObjectsAndDesignPrinciples)
