const {sum,resta,mul} = require('./sum');

test('sums two numbers', () => {
  expect(sum(1, 0)).toBe(1);
});

test('subtract  two numbers', () => {
  expect(resta(3, 2)).toBe(1);
});

test('multiply  two numbers', () => {
  expect(mul(3, 2)).toBe(6);
});