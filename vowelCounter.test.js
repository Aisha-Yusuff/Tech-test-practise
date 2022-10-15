const vowelCounter = require("./vowelCounter");

describe("vowelCounter", () => {
  it("returns vowels and their initial count", () => {
    expect(vowelCounter(" ")).toEqual("A - 0\nE - 0\nI - 0\nO - 0\nU - 0");
  });
});
