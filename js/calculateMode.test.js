const calculateMode = require("./calculateMode");

test("[1,2,3,3]", () => {
  expect(calculateMode([1,2,3,3]))===([3]);
});

test("[4.5, 0, 0]", () => {
  expect(calculateMode([4.5, 0, 0]))===([0]);
});

test("[1.5, -1, 1, 1.5]", () => {
  expect(calculateMode([1.5, -1, 1, 1.5]))===([1.5]);
});

test("[1,1,2,2]", () => {
  expect(calculateMode([1,1,2,2]))===([1,2]);
});

test("[1,2,3,3]", () => {
  expect(calculateMode([1,2,3]))===([1,2]);
});

test("[1,2,3,3]", () => {
  expect(calculateMode(["who", "what", "where", "who"]))===(["who"]);
});