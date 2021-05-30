// Write your own unit tests here!
const calculateMode = require('./calculateMode');
test('will return most frequent value in array', () => {
  expect(calculateMode([1,2,3,3])).toEqual([3]);
  expect(calculateMode([4.5,0,0])).toEqual([0]);
  expect(calculateMode([1.5,-1,1,1.5])).toEqual([1.5]);
  expect(calculateMode([1,1,2,2])).toEqual([1,2]);
  expect(calculateMode([1,2,3])).toEqual([1,2,3]);
  expect(calculateMode(["who", "what", "where", "who"])).toEqual(["who"]);
})