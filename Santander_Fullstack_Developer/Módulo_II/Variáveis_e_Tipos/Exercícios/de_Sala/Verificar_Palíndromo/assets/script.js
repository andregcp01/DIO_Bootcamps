function checkword(){
	var a = document.getElementById("word").value;
	
	let reverseString = (a);
	var splitString = (a).split("");
	//alert(`${splitString}`); // Divisão dos elementos do Array
	
	var reverseArray = splitString.reverse();
	//alert(`${reverseArray}`); // Revertendo a ordem dos elementos do Array
	
	var joinArray = reverseArray.join("");
	//alert(`${joinArray}`); // Fusão dos elementos ao contrário
	
	if((joinArray)==(a)){
		alert(`A palavra é um palíndromo!`)
	} else {
		alert(`A palavra não é um palíndromo!`)
	}
}