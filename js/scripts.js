function Player(playerName) {
  this.playerName = playerName;
  this.gameScore = 0;
  this.turnScore = 0;
  this.turn = false;
}

Player.prototype.hold = function() {
  this.gameScore += this.turnScore;
  this.turnScore = 0;
  this.turn = false;
};

Player.prototype.roll = function() {
  var dieValue = Math.floor(Math.random() * (6)) + 1;
  if (dieValue !== 1){
    this.turnScore += dieValue;
  } else {
   this.turnScore = 0;
   this.turn = false;
  }
};

$(document).ready(function() {
  var player1 = new Player ("player1");
  player1.turn = true;
  var player2 = new Player ("player2")
  player2.turn = false;
  var skunkTurnMessage = "Skunk, it's your turn!"
  var pigTurnMessage = "Pig, it's your turn!"
  $("form#pig").submit(function(event) {
    event.preventDefault();

    var player1Choice = $("input[name=turn-choice]:checked", "#pig").val();

    if (player1Choice === "roll"){
      player1.roll();
    } else {
      player1.hold();
    }

    var gameScore = player1.gameScore;
    var turnScore = player1.turnScore;
    $(".player1GameScore").text(gameScore);
    $(".player1TurnScore").text(turnScore);
    if (player1.turn === false) {
      $(".TurnMessage").text(skunkTurnMessage);
      player2.turn = true;
    }

  });

  $("form#skunk").submit(function(event) {
    event.preventDefault();

    var player2Choice = $("input[name=turn-choice]:checked", "#skunk").val();

    if (player2Choice === "roll"){
      player2.roll();
    } else {
      player2.hold();
    }

    var gameScore = player2.gameScore;
    var turnScore = player2.turnScore;
    $(".player2GameScore").text(gameScore);
    $(".player2TurnScore").text(turnScore);
    if (player2.turn === false) {
      $(".TurnMessage").text(pigTurnMessage);
      player1.turn = true;
    }
  });
});
