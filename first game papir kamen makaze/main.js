let playGame = confirm("do you wanna play rock, paper, scissors?");
if (playGame) {
	let playerChoice = prompt("choose rock, paper, scissors");
	if (playerChoice) {
		let playerOne = playerChoice.trim().toLowerCase();
		if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
			let computerChoice = Math.floor(Math.random()* 3 + 1);
			let computer = computerChoice === 1 ? "rock"
			: computerChoice === 2 ? "paper"
			: "scissors";

			let result = playerOne === computer  
			? `PlayerOne:${playerOne} \n computer:${computer} \n TIE GAME`
			: playerOne === "rock" && computer == "paper"
			? `PlayerOne:${playerOne} \n computer:${computer} \n COMPUTER WINS`
			: playerOne === "paper" && computer == "scissors"
			? `PlayerOne:${playerOne} \n computer:${computer} \n COMPUTER WINS`
			: playerOne === "scissors" && computer == "rock"
			? `PlayerOne:${playerOne} \n computer:${computer} \n COMPUTER WINS`
			: `PlayerOne:${playerOne} \n computer:${computer} \n PLAYER ONE WINS`;
			alert(result);
			let playAgain = confirm("do you wanna play Again?")
			if(playAgain) {
				location.reload();
			}else {
				alert("GOODBYE!");
			}

		}else{
			alert(`you didnt type the right thing, you typed ${playerOne}`);
		}
	}else {
		alert("you didnt pick anything");
	}
}else {
	alert("ok, another time maybe");
}