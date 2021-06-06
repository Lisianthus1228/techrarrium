function getStory(copper,dna,mutanium) {
	if (mutanium >= 50 && storyProgress[1] == 0){
		updateStory(1);
	}
	
	if (mutanium >= 120 && boughtUpgrades[3] == 1 && storyProgress[2] == 0){
		updateStory(2)
	}
}

function updateStory(value){
	document.getElementById("storyText").innerHTML = storyDialogue[value];
	storyProgress[value] = 1;
}

storyProgress = [1,0,0];
var storyDialogue = [
'"Your study into a mechanical terrarium begins."',
'"Your terrarium flourishes, but sentience is still out of reach."',
'"The ecosystem begins to evolve."'
]