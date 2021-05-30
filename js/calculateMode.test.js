// Write your own unit tests here!
const calculateMode = require('./calculateMode');
test('will return most frequent value in array', () => {
  expect(calculateMode(2)).toBe(2);
})