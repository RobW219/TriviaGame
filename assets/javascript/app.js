$(document).ready(function(){

	$("#question").hide();
	$("#choices").hide();
	$("#image").hide();
	$(".h2").hide();

	var questionArray = [
		{
			question: "Which city is home to the Harley-Davidson Museum?", 
			answer: "Milwaukee", 
			choices: ["Detroit", "Dallas", "Milwaukee", "Madison"]},
		{
			question: "In what year was the Harley-Davidson Motor Company established?", 
			answer: "1903",
			choices: ["1898", "1903", "1912", "1900"]},
		{
			question: "What Harley-Davidson model has been in continuous production the longest?", 
			answer: "Sportster", 
			choices: ["Sportster", "ElectraGlide", "DynaGlide", "V-Rod"]},
		{
			question: "What South Dakota city do Harley-Davidson enthusiasts flock to every August?", 
			answer: "Sturgis", 
			choices: ["Rapid City", "Pierre", "Sturgis", "Aberdeen"]},
		{
			question: "By what animal nickname are Harley-Davidson motorcycles known?",
			answer: "Hogs", 
			choices: ["Buffalos", "Rhinos", "Beavers", "Hogs"]}
	];

	var countDown= 10;
	var intervalId;
    
	$('#startButton').click(function () {
			$('#startButton').hide();
			$("#question").show();
			$("#choices").show();
			$(".h2").show();
			indexQ = 0;
			correct = 0;
			displayQuestion();
			runTimer();				
		});

	function runTimer() {
		console.log((new Error()).stack);
		clearInterval(intervalId);
		console.log('inside runTimer');
		intervalId = setInterval(decrement, 1000);
		countDown = 10;
		// decrement();
		// setInterval(displayQuestion, 10000);
		// displayQuestion();
	}

	function decrement() {
		countDown--;
		$(".h2").html("<h2>Time Remaining: " + countDown + "</h2>");
		if (countDown === 0) {
			indexQ ++;
			displayQuestion();
			clearInterval(decrement);
			runTimer();
		}
		if (indexQ === 5) {
			stopTimer();
		}
	}

	function stopTimer() {
		clearInterval(intervalId);
		clearInterval(decrement);
		clearInterval(displayQuestion);
		console.log('inside stopTimer');
		countDown = 10;
		$(".h2").hide();
		endGame();
		// countDown = 4;
		// runTimer();
	
	}

	// var showQuestion;
	var indexQ = 0;
	var correct = 0;

	function displayQuestion() {
		$("#question").empty();
		$("#choices").empty();
		// function decrement() {
		// 		countDown--;
		// 		$(".h2").html("<h2>Time Remaining: " + countDown + "</h2>");
		// 		if (countDown === 0) {
		// 			stopTimer();
		// 		}
		// 	}
		// intervalId = setInterval(decrement, 1000);
		// countDown = 4;
		// runTimer();
		// showQuestion = setInterval(displayQuestion, 4000);
		if (questionArray[indexQ]) {
		$("#question").html(questionArray[indexQ].question);
		for (var i= 0; i < questionArray[indexQ].choices.length; i++) {
			var choice = $("<li>" + questionArray[indexQ].choices[i] + "</li>" + "<br />");
			$("#choices").append(choice);
			choice.attr("data-value", questionArray[indexQ].choices[i]);
			choice.on("click", function () {
				if ($(this).attr("data-value") === questionArray[indexQ].answer) {
					correct ++;
					indexQ ++;
					// runTimer();
					// $("#question").empty();
					// $("#choices").empty();
					// clearInterval(displayQuestion);
					displayQuestion();
					
				} else {
					indexQ ++;
					// runTimer();
					// $("#question").empty();
					// $("#choices").empty();
					// clearInterval(displayQuestion);
					displayQuestion();
					
				}
			})
		
		}

	}	
		
	}

	function endGame() {
		$("#choices").empty();
		$(".h2").hide();
		var endMessage = $("<li>" + correct + " of 5 Correct. Good Job Buddy" + "</li>");
		$("#choices").show();
		$("#choices").append(endMessage);
		$("#startButton").show();
	}



	// function nextQuestion() {
	// 	indexQ ++;
	// 	clearInterval(displayQuestion);
	// 	runTimer();
	// 	// countDown = 4;
	// 	// $("#question").empty();
	// 	// $("#choices").empty();
	// 	// intervalId = setInterval(decrement, 1000);
	// 	// $(".jumbotron").append("<img src=""../images/Logo-Harley-Davidson-Wallpaper-Backgrounds-28.jpg""/>");
	// 	// setTimeout(displayQuestion, 4000);
	// 	// if (indexQ === questionArray.length) {
	// 	// 	indexQ = 0;
	// 	// 	stopQuestions();
	// 	// }
	// }

	// function startQuestions() {
	// 	showQuestion = setInterval(nextQuestion, 4000);
	// }

	// function stopQuestions() {
	// 	clearInterval(showQuestion);
	// }


})

