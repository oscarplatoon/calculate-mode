const calculateMode = require('./calculateMode');

test('returns an array', () => {
  expect(Array.isArray(calculateMode([1, 2]))).toBe(true);
});

test('returns null if no array passed', () => {
  expect(calculateMode()).toBe(null);
})

test('Functionality test', () => {
  expect(calculateMode([1, 2, 3, 3])).toEqual([3]);
  expect(calculateMode([4.5, 0, 0])).toEqual([0]);
  expect(calculateMode([1.5, -1, 1, 1.5])).toEqual([1.5]);
  expect(calculateMode([1, 1, 2, 2])).toEqual([1,2]);
  expect(calculateMode([1, 2, 3])).toEqual([1,2,3])
})


test('String Array/JSON.parse() Test', () => {
  expect(calculateMode(["who", "what", "where", "who"])).toEqual(["who"])
})
