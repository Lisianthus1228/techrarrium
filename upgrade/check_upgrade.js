function checkUpgrade(){
	//Upgrade 0.0: Electrical Stimulus
	if(copperTotal >= 50 && boughtUpgrades[0] == 0){
		document.getElementById("upgrade0").style.display = "block";
	} 
	
	//Upgrade 0.1: Efficient Reactions
	if(dnaTotal >= 400 && boughtUpgrades[1] == 0){
		document.getElementById("upgrade1").style.display = "block";
	} 
	
	//Upgrade 0.2: Basic Bioleaching
	if(mutaTotal >= 10 && boughtUpgrades[2] == 0){
		document.getElementById("upgrade2").style.display = "block";
	} 
	
	//Upgrade 1.0: Mutanium Salts
	if(mutaTotal >= 80 && boughtUpgrades[3] == 0){
		document.getElementById("upgrade3").style.display = "block";
	} 
	
	//Upgrade 1.1: Sentient Copper
	if(copperTotal >= 1000 && boughtUpgrades[4] == 0){
		document.getElementById("upgrade4").style.display = "block";
	} 
	
	//Upgrade 1.2: True Sentience
	if(copperTotal >= 3000 && mutaTotal >= 250 && boughtUpgrades[5] == 0){
		document.getElementById("upgrade5").style.display = "block";
	} 
}