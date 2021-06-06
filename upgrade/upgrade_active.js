//Upgrade 3: Mutanium Salt
var mutaSaltBonus = 0;
var sentientBonus = 1;

window.setInterval(function(){
	if (boughtUpgrades[3] == 1){
		mutaSaltBonus = Math.floor(mutaTotal/4);
	}
	if (boughtUpgrades[4] == 1){
		sentientBonus = Math.log2(copperTotal);
		if (sentientBonus < 1){
			sentientBonus = 1;
		}
	}
}, 20);

function calculateBonusCopper(){
	bonusCopper = mutaSaltBonus;
	return bonusCopper;
}