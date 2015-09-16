function Player(playerName) {
  this.playerName = playerName;
  this.gameScore = 0;
  this.turnScore = 0;
}

Player.prototype.hold = function() {
  this.gameScore += this.turnScore;
  this.turnScore = 0;
};

Player.prototype.roll = function() {
  var dieValue = Math.floor(Math.random() * (6)) + 1;
  if (dieValue !== 1){
    this.turnScore += dieValue;
  } else {
   this.turnScore = 0;
  }
};
