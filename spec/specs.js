describe("Player", function() {
  it("describes the properties of a player when it's not their turn", function() {
    var testPlayer = new Player("Jim");
    expect(testPlayer.gameScore).to.equal(10);
  });
});
