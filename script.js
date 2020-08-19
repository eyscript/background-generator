var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn=document.querySelector(".btnram");
var pu=document.querySelector("h1");



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}


function randomm(){
	var ram, cad;
	ram=Math.floor(Math.random()*255+0);
	
return ram;
}

function imp(){
	var color="rgb"+"("+randomm()+","+ randomm()+"," +randomm()+")";
	var color2="rgb"+"("+randomm()+","+ randomm()+"," +randomm()+")";
	body.style.background =
	"linear-gradient(to right, " 
	+ color
	+ ", " 
	+ color2
	+ ")";

	css.textContent = body.style.background + ";";
}


setGradient();


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


btn.addEventListener("click", imp);
