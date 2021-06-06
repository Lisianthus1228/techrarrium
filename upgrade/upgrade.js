function upgradeEffect(value){
	switch(value){
		case 0:
			dnaMR += 5;
			break;
		case 1:
			mutaPS += 40;
			break;
		case 2:
			baseCopperOreSize += 2;
			break;
		case 5:
			finalTab();
			break;
	}
	boughtUpgrades[value] = 1;
	updateButton(value);
}

function updateButton(value){
	boughtUpgrades[value] = 1;
	document.getElementById("upgrade" + value.toString()).style.display="none"
	document.getElementById("upgrade" + value.toString() + "B").style.display="block"
	document.getElementById("upgrade" + value.toString() + "B").style.opacity="0.4"
}