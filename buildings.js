var buildings = [0,0,0]
var basePrice = [3,5,40]

function buyBuilding(value,priceMultiplier){
	price = buildingPrice(value,priceMultiplier);
	switch(value){
		case 0:
			if(mutaTotal >= price){
				mutaTotal -= price;
				dnaMR += 2;
				copperPerSec += 2;
				buildings[value] += 1;
			}
			break;
		case 1:
			if(copperTotal >= price){
				copperTotal -= price;
				mutaPS += 4;
				buildings[value] += 1;
			}
			break;
		case 2:
			if(dnaTotal >= price){
				dnaTotal -= price;
				dnaMR += 10;
				buildings[value] += 1;
			}
	}
	document.getElementById("B"+value.toString()+"Cost").innerHTML = price;
	document.getElementById("B"+value.toString()+"Bought").innerHTML = buildings[value];
}

function buildingPrice(value,priceMultiplier){
	price = Math.floor((buildings[value]**priceMultiplier) + basePrice[value]);
	return price;
}