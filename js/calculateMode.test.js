const { expect, test } = require("@jest/globals");
let h = require("./calculateMode.js");

test("calculateMode returns [1] when called with [1,1,2]", 
  () => {
      expect(h.calculateMode([1,1,2])).toEqual([1]);
  }
)

test("calculateMode returns [who] when called with [[who, what, where, who])", () => {
  expect(h.calculateMode(["who", "what", "where", "who"])).toEqual(["who"])
}
)