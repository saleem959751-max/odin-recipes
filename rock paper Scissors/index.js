var option = ["rock", "paper", "scissor"];


function game() {
  //player choice
  var guessnumber = document.getElementById("guessnumber");
    var playerchoice = guessnumber.value.toLowerCase();
    // computerchoice
  var compuerchoice = option[Math.floor(Math.random() * option.length)];
  let result=" ";
  if (playerchoice === compuerchoice) {
    result = "It's a draw!";
  } else if (
    (playerchoice === "rock" && compuerchoice === "scissors") ||
    (playerchoice === "paper" && compuerchoice === "rock") ||
    (playerchoice === "scissors" && compuerchoice === "paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  document.getElementById("result").textContent = result;
}
