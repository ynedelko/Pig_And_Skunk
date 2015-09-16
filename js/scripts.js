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

$(document).ready(function() {
  $("form#pig").submit(function(event) {
    event.preventDefault();
    var player1 = new Player ("player1");

    var player1Choice = $("input[name=turn-choice]:checked", "#pig").val();


    if (player1Choice === "roll"){
      player1.roll;
    } else {
      player1.hold;
    }

    var gameScore = player1.gameScore;
    var turnScore = player1.turnScore;
    $(".player1GameScore").text(gameScore);
    $(".player1TurnScore").text(turnScore);
  });
});
