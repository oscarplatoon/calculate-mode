const calculateMode = require('./calculateMode');

test("test that mode of [1, 2, 3, 1, 3, 2, 3] === [3]", 
  () => {
    expect(calculateMode([1, 2, 3, 1, 3, 2, 3])).toEqual(["3"])
  }
)

test("test that mode of [1, 2, 3] === [1, 2, 3]", 
  () => {
    expect(calculateMode([1, 2, 3])).toEqual(["1", "2", "3"])
  }
)

test("test that mode of ['apples', 'oranges', 'apples', 'pears', 'oranges'] === ['apples', 'oranges']", 
  () => {
    expect(calculateMode(['apples', 'oranges', 'apples', 'pears', 'oranges'])).toEqual(['apples', 'oranges'])
  }
)
// Write your own unit tests here!
