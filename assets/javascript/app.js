var correctAnswers = 0;
var wrongAnswers = 0;
var finalScore = 0;


$(document).ready(function() {
	var answers = ["a", "b", "c", "d", "a", "b", "c"];
	$("#submit").on("click", function(e) {
		e.preventDefault();
		var userAnswers = [];
		var numQuestions = 7;
		for(var i =0; i < numQuestions; i++) {
			var selValue = $("input[name=q"+(i+1)+"]:checked").val();

			userAnswers.push(selValue);
		}

		console.log(answers);
		console.log(userAnswers);
		if(answers[0] === userAnswers[0]) {
			correctAnswers++;
		}	
		else {
			wrongAnswers++;
		}
		if(answers[1] === userAnswers[1]) {
			correctAnswers++;
		}
		else {
			wrongAnswers++;
		}
		if(answers[2] === userAnswers[2]) {
			correctAnswers++;
		}
		else {
			wrongAnswers++;
		}

		if(answers[3] === userAnswers[3]) {
			correctAnswers++;
		}
		else {
			wrongAnswers++;
		}

		if(answers[4] === userAnswers[4]) {
			correctAnswers++;
		}
		else {
			wrongAnswers++;
		}

		if(answers[5] === userAnswers[5]) {
			correctAnswers++;
		}
		else {
			wrongAnswers++;
		}

		if(answers[6] === userAnswers[6]) {
			correctAnswers++;
		}
		else {
			wrongAnswers++;
		}

		$("#correctanswers").html("Correct Answers: " + correctAnswers);
		$("#wronganswers").html("Wrong Answers: " + wrongAnswers);

	})
})


function reset () {
	$("#startgame").on("click", function() {
		correctAnswers  = 0;
		wrongAnswers = 0;
		timer = 30;
		startGame();
	})

}


function startGame () {

var timer = 30;

var interval = setInterval (function () {
	timer--;
	console.log(timer)
	$("#display").html("Timeleft: " + timer);

	if (timer === 0) {
		alert("TIME HAS RUN OUT!!!");
		clearInterval(interval);
	}
}, 1000);

}
startGame();


//figure out how to start the timer instead of letting it run
//figure how to allow the game to reset