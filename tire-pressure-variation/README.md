# Tire Pressure Monitoring System Variation

## Goal
Be able to test `Alarm`'s `check` function without changing the method signature.

1. Test the code using test doubles created by you.

2. Test the code using test doubles created with a library.

## Tools
[Mocking with Jest](https://jestjs.io/docs/en/mock-functions)

### Example of mock
```javascript
test('should_interact_with_the_spy', () => {
  const collaborateSpy = jest.spyOn(collaborator, 'collaborate');
  const myClass = new MyClass(collaborator);

  myClass.run();

  expect(collaborateSpy).toHaveBeenCalled();

  collaborateSpy.mockReset();
  collaborateSpy.mockRestore();
});
```

### Example of stub

```javascript
test('should_interact_with_the_spy', () => {
  const collaboratorResponse = "some response";
  const collaborateStub = jest.spyOn(collaborator, 'collaborate').mockImplementation(() => {return collaboratorResponse;});
  const myClass = new MyClass(collaborateStub);

  const result = myClass.run();

  expect(result).toBe(collaborator);

  collaborateStub.mockReset();
  collaborateStub.mockRestore();
});
```

## Learnings
How to build a Spy and a Stub manually.

How to use Jest to generate the test doubles.

## References

Based on an exercise from [Luca Minudel](https://twitter.com/lukadotnet?lang=en)'s [TDD with Mock Objects And Design Principles exercises](https://github.com/lucaminudel/TDDwithMockObjectsAndDesignPrinciples)
