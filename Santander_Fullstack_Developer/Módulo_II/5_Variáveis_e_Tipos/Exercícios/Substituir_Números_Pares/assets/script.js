function eveniszero(){
	var a = document.getElementById("sequence").value;
	
	let sequenceNumbers = (a);
	
	let splitSequence = sequenceNumbers.split("");
	alert(`${splitSequence}`)
	
	function swap(splitSequence) {
		var b = [];
		
		for (var i=0; i < splitSequence.length; i++) {
			if (a[i] % 2 == 0) {
				b.push(splitSequence[i]=0);
			} else {
				if  (a[i] % 2 == 1){
					b.push(splitSequence[i]);
				}
				else {
					b.push(splitSequence[i]=-1);
				}
			}
		}
	return b;
	}
	
	alert(swap(splitSequence));
}

//	function swap(splitSequence) {
//		var b = [];
//		
//		for (var i=0; i < splitSequence.length; i++) {
//			if (a[i] % 2 === 0) {
//				b.push(a[i]);
//			}
//		}
//	return b;
//	}