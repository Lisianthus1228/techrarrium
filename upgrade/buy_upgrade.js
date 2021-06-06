var boughtUpgrades = [0,0,0,0,0,0]

function purchaseUpgrade(value){
	switch(value){
		case 0:
			if(copperTotal >= 100){
				copperTotal -= 100;
				upgradeEffect(value)
			}
			break;
		case 1:
			if(dnaTotal >= 400){
				dnaTotal -= 400;
				upgradeEffect(value)
			}
			break;
		case 2:
			if(mutaTotal >= 24){
				mutaTotal -= 24;
				upgradeEffect(value)
			}
			break;
		case 3:
			if(mutaTotal >= 100 && copperTotal >= 100){
				mutaTotal -= 100;
				copperTotal -= 100;
				upgradeEffect(value)
			}
		case 4:
			if(mutaTotal >= 200 && copperTotal >= 2000){
				mutaTotal -= 200;
				copperTotal -= 2000;
				upgradeEffect(value)
			}
		case 5:
			if(mutaTotal >= 300 && copperTotal >= 6000 && dnaTotal >= 50000){
				mutaTotal -= 300;
				copperTotal -= 6000;
				dnaTotal -= 50000;
				upgradeEffect(value)
			}
	}
}