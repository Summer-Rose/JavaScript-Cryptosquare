describe('stripString', function() {
  it("puts string to lowercase and removes punctuation and whitespace", function() {
    expect(stripString("Molly & Summer!")).to.equal("mollysummer");
  });
});

describe('calculateRectangleWidth', function() {
  it("returns rounded up square side length", function() {
    expect(calculateRectangleWidth(5)).to.equal(3);
  });

  it("returns rounded up square side length of bigger numbers", function() {
    expect(calculateRectangleWidth(75)).to.equal(9);
  });

  it("returns side length of perfect square", function() {
    expect(calculateRectangleWidth(4)).to.equal(2);
  });
});

describe('reconstructString', function() {
  it("returns rearranged characters", function() {
    expect(reconstructString("abcdefgh", 3)).to.equal("adgbehcf");
  });

  it("returns rearranged characters of larger string", function() {
    expect(reconstructString("abcdefghijk", 4)).to.equal("aeibfjcgkdh");
  });
});

describe('finalString', function() {
  it("separates string into five-character chunks", function() {
    expect(finalString("adgbehcf")).to.equal("adgbe hcf");
  });

  it("separates larger string into five-character chunks", function() {
    expect(finalString("aeibfjcgkdh")).to.equal("aeibf jcgkd h");
  });
});

describe('cryptosquare', function() {
  it("takes input sentence and returns cryptosquared string", function() {
    expect(cryptosquare("abcdefgh")).to.equal("adgbe hcf");
  });

  it("accommodates capital letters", function() {
    expect(cryptosquare("AbcdeFgh")).to.equal("adgbe hcf");
  });

  it("accommodates punctuation and whitespace", function() {
    expect(cryptosquare("a'bc de fg h")).to.equal("adgbe hcf");
  });

  it("doesn't fuck shit up", function() {
    expect(cryptosquare("Don't compare yourself to others, compare yourself to the person you were yesterday."))
      .to.equal("drfcu hotoe toreu enyom spwrt oopee edcut alrra orhrf seyms eetoy peryo neals otys");
  });
});
