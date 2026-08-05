//send help please anyone someone
//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
hideall();

/*JS for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");
hamBtn.addEventListener("click",toggleMenus);
function toggleMenus(){ /*open and close menu*/
//if menuItemsList dont have the class "menuShow", add it, else remove it
menuItemsList.classList.toggle("menuShow");
//if menu is showing (has the class “menuShow”)
if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Close Menu"; //change button text to chose menu
}else{ //if menu NOT showing
hamBtn.innerHTML="Open Menu"; //change button text open menu
}
}

//fullscreen
const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() 
{ //must be called by user generated event
	if (document.documentElement.requestFullscreen) 
	{
		document.documentElement.requestFullscreen();
	} 
	else if (document.documentElement.mozRequestFullScreen) 
	{ // Firefox
		document.documentElement.mozRequestFullScreen();
	} 
	else if (document.documentElement.webkitRequestFullscreen) 
	{ // Chrome, Safari, and Opera
		document.documentElement.webkitRequestFullscreen();
	} 
	else if (document.documentElement.msRequestFullscreen) 
	{ // IE/Edge
		document.documentElement.msRequestFullscreen();
	}
}
function exitFullscreen() 
{
	if (document.exitFullscreen) 
	{
		document.exitFullscreen();
	} 
	else if (document.mozCancelFullScreen) 
	{ // Firefox
		document.mozCancelFullScreen();
	} 
	else if (document.webkitExitFullscreen) 
	{ // Chrome, Safari, and Opera
		document.webkitExitFullscreen();
	} 
	else if (document.msExitFullscreen) 
	{ // IE/Edge
		document.msExitFullscreen();
	}
}

//game
const startBtn = document.querySelector("#startBtn");
const timerBox = document.querySelector("#timerbox");
let timeLeft = 60;
let gameIntervalId = null;
let gameActive = false; 
let currentSpeed = 1000;

const coin = document.getElementById("coin");
function GetRandom(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

function MoveCoin() {
	if (!gameActive) return;

	const gameWindow = document.getElementById("gameWindow");
	
	// Measure width and height of the box
	let windowWidth = gameWindow.clientWidth;
	let windowHeight = gameWindow.clientHeight;
	
	// Measure the coin image
	let coinSize = coin.clientWidth;
	
	// Calculate boundary to not overlap box
	let maxX = windowWidth - coinSize;
	let maxY = windowHeight - coinSize;
	
	// Generate within boundary
	let randomX = GetRandom(0, maxX);
	let randomY = GetRandom(0, maxY);
	
	coin.style.left = randomX + "px";
	coin.style.top = randomY + "px";
}
// Clear the automatic global interval from before
var moveCoinItvId; 

function startGame() {
	if (gameActive) return; // Prevents restarting if game is already running

	// Reset game states
	score = 0;
	timeLeft = 60;
	currentSpeed = 1000;
	gameActive = true;

	// Update HTML text
	scoreBox.innerHTML = "Coins Earned: " + score;
	timerBox.innerHTML = "Time Left: " + timeLeft + "s";
	startBtn.disabled = true; // Disable button during gameplay

	// Start intervals
	moveCoinItvId = setInterval(MoveCoin, currentSpeed);
	gameIntervalId = setInterval(updateTimer, 1000);
}

function adjustSpeed() {
	if (score >= 50) {
	currentSpeed = 500;
	} else if (score >= 35) {
	currentSpeed = 600;
	} else if (score >= 20) {
	currentSpeed = 750;
	} else {
	currentSpeed = 1000; // Starting speed
	}
	// Reset the interval loop with the fresh speed calculation
	clearInterval(moveCoinItvId);
	moveCoinItvId = setInterval(MoveCoin, currentSpeed);
}

function updateTimer() {
	timeLeft--;
	timerBox.innerHTML = "Time Left: " + timeLeft + "s";
  
	if (timeLeft <= 0) {
 	endGame();
  }
}

function endGame() {
	gameActive = false;
	startBtn.disabled = false; 
  
	clearInterval(moveCoinItvId);
	clearInterval(gameIntervalId);
  
	//Money earned check
	if (score > 67) {
		alert("VICTORY! You earned " + score + " coins and bought your dearest Pipa!");
  		} else {
    	alert("Game Over! You only got " + score + " coins. Still broke! Try harder to get that Pipa!");
  		}
}


// Link the start button to the startGame function
startBtn.addEventListener("click", startGame);

const scoreBox=document.getElementById("scoreBox");
 
const popAudio = new Audio("popsound.mp3");
//create an new Audio Object using sound file
var score=0; //to track how many clicks
function coinCatch() {
	// Block clicks if the game hasn't started or has ended
	if (!gameActive) return; 

	score++;
	scoreBox.innerHTML = "Coins Earned: " + score;
	popAudio.play();

	clearInterval(moveCoinItvId);

	MoveCoin(); 

	adjustSpeed();
}

//link coin to mouseclick to coinCatch function
coin.addEventListener("click",coinCatch);



