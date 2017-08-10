const expect = require("chai").expect;
const reverseWords = require('../src/reverse-words.js')

it("reverseWords reverses words", () => {
  expect(reverseWords("Hey fellow warriors")).to.eq("Hey wollef sroirraw")
})
