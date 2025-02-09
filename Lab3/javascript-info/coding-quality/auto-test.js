//What’s wrong in the test of pow below?

it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
// let result = x; → result = 5
// First assertion: assert.equal(pow(5, 1), 5) Passes.
// result *= x; → result = 5 * 5 = 25
// Second assertion: assert.equal(pow(5, 2), 25) Passes.
// result *= x; → result = 25 * 5 = 125
// Third assertion: assert.equal(pow(5, 3), 125) Passes.
// It looks correct only if the tests run in order. But if they are executed independently, the result variable will be incorrect.