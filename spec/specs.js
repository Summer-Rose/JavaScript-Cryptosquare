describe('stripString', function() {
  it("puts string to lowercase and removes punctuation and whitespace", function() {
    expect(stripString("Molly & Summer!")).to.equal("mollysummer");
  });
});

describe('calculateRectangleWidth', function() {
  it("returns rounded up square side length", function() {
    expect(calculateRectangleWidth(5)).to.equal(3);
  });

  it("returns side length of perfect square", function() {
    expect(calculateRectangleWidth(4)).to.equal(2);
  });
});

describe('reconstructString', function() {
  it("returns array of characters in new order", function() {
    expect(reconstructString("abcdefgh", 3)).to.eql(["a", "d", "g", "b", "e", "h", "c", "f"]);
    //expect(reconstructString("abcdefgh", 3)).to.equal("adgbehcf");
  });
});
