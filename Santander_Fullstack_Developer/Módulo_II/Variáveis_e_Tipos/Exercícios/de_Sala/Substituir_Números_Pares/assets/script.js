function ripevennumbers(){
	var a = document.getElementById("sequence").value;
	
	let sequenceNumbers = (a);
	
	let splitSequence = (a).split("")
	alert(`${splitSequence}`)
	
	for (var i = 0; i < splitSequence.length; i++) {
		if (splitSequence[i] % 2 === 0){
			alert(`${splitSequence[i]}`)
		}
	}
}