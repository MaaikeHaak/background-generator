var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

console.log(Math.floor(Math.random() * 255));

makeGradientBackground();
displayColorCodes();

function changeColor() {
	makeGradientBackground();
	displayColorCodes();
}

function makeGradientBackground() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function displayColorCodes() {
	css.textContent = body.style.background + ";";
}

function generateHex() {
	var a = Math.floor(Math.random() * 255).toString(16);
	if(a.length < 2){
		a = "0" + a;
	}
	return a;
}

function generateFullHex() {
	return "#" + generateHex() + generateHex() + generateHex();
}

random.addEventListener("click", function(){
	color1.value = generateFullHex();
	color2.value = generateFullHex();
	makeGradientBackground();
	displayColorCodes();
})

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);