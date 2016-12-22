var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer;
var fuelTimer;
var fuel=100;
var alturaMax=70;
var fuelMin=0;
var nivel=1;

window.onload = function(){
    document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		/*document.getElementById("dificultadboton").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";*/
		stop();
	}
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		/*document.getElementById("menudificultad").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";*/
		start();
	}
	
	//Empezar a mover nave a =-g motor encendido    a = g motor apagado  funciton ()motor off// function onclick=
	start();
	/*document.getElementsByClassName("imagendificult").onclick = nivel==1;
	document.getElementsByClassName("imagendificultn").onclick = function(){
		nivel==10;}
	document.getElementsByClassName("imagendificulti").onclick = nivel==100;*/
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	document.onmousedown = motorOn;
	document.onmouseup = motorOff;


	/*document.getElementById("nave").onclick = function(){
	
		if (a==g) {
motorOn();
		}else{
motorOff();
		}
	}*/
}



function start(){
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}
function motorOn(){
	if(fuelTimer==null)
	fuelTimer=setInterval(function(){restarFuel(); }, 100);
	a = - g;
document.getElementById('rocketoff').src = "img/navefuego.png";

}
function motorOff(){
				
	a=g;
document.getElementById('rocketoff').src = "img/navesinfuego.png";
clearInterval(fuelTimer);
fuelTimer=null;

}

function restarFuel(){
	
	if(fuel>fuelMin){
		fuel -=1;
	}
}
function gameOver(){
	alert("¡GAME OVER!");
}


function moverNave(){

	v +=a*dt*nivel;
	document.getElementById("velocidad").innerHTML=v.toFixed(2);
	y +=v*dt;
	document.getElementById("altura").innerHTML=(alturaMax - y).toFixed(2);

	document.getElementById("fuel").innerHTML=fuel;


	
	//mover hasta que top sea un 70% de la pantalla
	if (y<=alturaMax){ 
		document.getElementById("nave").style.top = y+"%"; 
	
	} else { 
			if(fuel<0 || v>=5 || y<=0 ){
		 
		document.getElementById('rocketoff').src = "img/explosion.png";
		setTimeout(function(){gameOver()}, 2000);
	}else{
		alert("Felicidades has superado la prueva: "+v.toFixed(2)+ " m/s");
		
	}
		stop();
	}
}

