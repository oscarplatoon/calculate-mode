// Write your own unit tests here!

const calculateMode = require('./calculateMode')

test('properly return mode', () => {
  expect(calculateMode([1,2,2,3])).toEqual(['2'])
})

test('properly return multi mode', () => {
  expect(calculateMode([1,2,2,3,3])).toEqual(['2','3'])
})
