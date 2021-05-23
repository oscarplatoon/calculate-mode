const cal = require('./calculateMode');

test('case 1', () => {
  expect(cal([1, 2, 3, 3])).toEqual([3]);
})
test('case 2', () => {
  expect(cal([4.5, 0, 0])).toEqual([0]);
})
test('case 3', () => {
  expect(cal([1, 2, 3])).toEqual([1, 2, 3]);
})
test('case 4', () => {
  expect(cal(["who", "what", "where", "what"])).toEqual(["what"]);
})