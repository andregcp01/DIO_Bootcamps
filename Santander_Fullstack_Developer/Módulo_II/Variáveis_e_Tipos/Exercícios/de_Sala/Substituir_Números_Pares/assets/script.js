function ripevennumbers(){
	var a = document.getElementById("sequence").value;
	
	let sequenceNumbers = (a);
	
	let splitSequence = (a).split("");
	//alert(`${splitSequence}`)
	
	function noeven(){
		var splitSequence = [];
		for (x in a){
			if (!(a[x]%2) == 0){
				splitSequence.push(a[x]);
			}
		}
	return splitSequence;
	}
	
	alert(noeven(splitSequence));
}