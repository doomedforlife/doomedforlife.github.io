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
const coin = document.getElementById("coin");
function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}
function MoveCoin() {
coin.style.left = GetRandom(0, 500) + "vw";
coin.style.top = GetRandom(0, 500) + "vh";
}
var moveCoinItvId = setInterval(MoveCoin, 1000);

const scoreBox=document.getElementById("scoreBox");
var score=0; //to track how many clicks
function coinCatch() {
//increases score after clicking
score++;
//update html scorebox
scoreBox.innerHTML = "Score: " + score;
}
//link coin to mouseclick to coinCatch function
coin.addEventListener("click",coinCatch);