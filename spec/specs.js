describe("Player", function() {
  it("describes the properties of a player when they start the game", function() {
    var testPlayer = new Player("Jim");
    expect(testPlayer.gameScore).to.equal(0);
  });
});
