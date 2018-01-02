var ids = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var shape = ["border-radius: 0%;", "border-radius: 50%", "border-radius: 0%;", "border-radius: 50%"];
var color = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "gray", "black"];
var playing = false;
var gameover = true;
var count = 0;
var time;
var timer = "stopped";
var elapsedTime;

//random shape picker
function randomShape(){
	var ind = Math.floor(Math.random() * 4);
	return shape[ind];
}
//random id picker
function randomId(){
	var ind = Math.floor(Math.random() * 9);
	return ids[ind];
}
//random color picker
function randomColor(){
	var ind = Math.floor(Math.random() * 9)
	return color[ind];
}
//random top position
function randomTop(){
	return Math.floor(Math.random() * 400);
}
//random left position
function randomLeft(){
	return Math.floor(Math.random() * 400);
}

function reset(){
	stopTimer();
	count = 0;
	playing = false;
	document.getElementById('one').style = "display: none;";
	document.getElementById('time').innerHTML = "Time: 0s";
}

function startTimer(){
		time = Date.now();
		timer = "started";
		return time;
}

function stopTimer(){
		timer = "stopped";
		elapsedTime = ((Date.now() - time)/1000 + "s")
		return elapsedTime;
}

//start with blank screen
document.getElementById('one').style = "display: none;";

//reset button
document.getElementById('reset').onclick = function(){
	reset();
}

//play button
document.getElementById('play').onclick = function(){
	alert('click the shapes!');
	stopTimer();
	startTimer();
	if (!playing){
		document.getElementById('one').setAttribute("style", `display: inline-block; ${randomShape()}; background-color: ${randomColor()}; position: relative; top: ${randomTop()}px; left: ${randomLeft()}px;`);
		playing = true;
	}
}

//click the shape
document.getElementById('one').onclick = function(){
	//displays a shape
	document.getElementById('one').setAttribute("style", `display: inline-block; ${randomShape()}; background-color: ${randomColor()}; position: relative; top: ${randomTop()}px; left: ${randomLeft()}px;`);
	count++
	stopTimer();
	startTimer();
	//timing the clicks
	document.getElementById('time').innerHTML = `time: ${elapsedTime}`;

}