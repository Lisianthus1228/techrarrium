// DEBUG -------------------------
document.addEventListener('keydown', function(event){
	if(event.keyCode == 71){
		copperTotal += 500;
		dnaTotal += 5000;
		mutaTotal += 500;
	}
});

//IMPORTANT CONSTANTS/VARIABLES
var copper = document.querySelector("#copperTotal");
var dna = document.querySelector("#dnaTotal");
var mutanium = document.querySelector("#mutaTotal");

let copperTotal = 0;
let dnaTotal = 0;
let mutaTotal = 0;
// Constants/Variables
let copperOreSize = 1;
var baseCopperOreSize = 1;
var copperPerSec = 0;

let dnaMR = 5;
let mutaProgress = 0;
let mutaPS = 100;

//Functions
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function copperIncrease(){
	copperTotal += copperOreSize;
}
function mutaIncrease(){
	if(dnaTotal >= 10 && copperTotal >= 3){
		copperTotal -= 3;
		dnaTotal -= 10;
		mutaProgress += getRandom(150,401);
	}
}

function dnaMultiplier(){
	dnaMRB = Math.floor(dnaMR*sentientBonus);
	return dnaMRB;
}
function mutaProgMultiplier(){
	mutaPSB = Math.floor(mutaPS*(sentientBonus-0.3));
	if (mutaPSB <= 100){
		mutaPSB = 100;
	}
	return mutaPSB;
}

var tab = "creaturetab"
function switchTabs(newtab){
	document.getElementById(tab).style.display = "none";
	document.getElementById(newtab).style.display = "block";
	tab = newtab;
}
function finalTab(){
	document.getElementById("game").style.display = "none";
	document.getElementById("finishGame").style.display = "block";
}

//Update UI
function updateUI(){
	//Copper
	copper.innerHTML = copperTotal;
	document.getElementById("copperOreSize").innerHTML = calculateCopperOre();
	document.getElementById("copperPerSec").innerHTML = copperPerSec;
	
	//DNA
	dna.innerHTML = dnaTotal;
	document.getElementById("dnaMR").innerHTML = dnaMultiplier();
	
	//Mutanium
	mutanium.innerHTML = mutaTotal;
	document.getElementById("mutaBar").value = mutaProgress;
	document.getElementById("mutaBarValue").innerHTML = mutaProgress;;
	document.getElementById("mutaPS").innerHTML = mutaProgMultiplier();
}
function updateMutanium(){
	if(mutaProgress >= 1000){
		mutaProgress -= 1000;
		mutaTotal += 1;
	}
}
function calculateCopperOre(){
	copperOreSize = baseCopperOreSize + calculateBonusCopper();
	return copperOreSize;
}

//Interval Functions
window.setInterval(function(){
	dnaTotal += dnaMultiplier();
	mutaProgress += mutaProgMultiplier();
	copperTotal += copperPerSec;
}, 1000);

//Refresh/update values
window.setInterval(function(){
	updateUI();
	updateMutanium();
	dnaMultiplier();
	getStory(copperTotal,dnaTotal,mutaTotal);
	checkUpgrade();
}, 20);