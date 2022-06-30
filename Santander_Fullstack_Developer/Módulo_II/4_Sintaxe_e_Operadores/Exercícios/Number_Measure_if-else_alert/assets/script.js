function add(){
	var a = document.getElementById("t1").value;
	var b = document.getElementById("t2").value;
	var c = (parseInt(a)+parseInt(b));
	var d = 10;
	var e = 20;
	//alert(parseInt(a)+parseInt(b));
	
	if((a)==(b)){
		alert("A e B são iguais!")
	} else {
		alert("A e B não são iguais")
	}
	
	let soma = (c);
		alert(`A + B = ${soma}`)
	
	if((c)<(d)){
		alert("A + B é menor do que 10!")
	} else {if((c)>(d)){
				alert("A + B é maior do que 10!")
	} 		else {
				alert("A + B é igual a 10!")
	}
		
	}
	if((c)<(e)){
		alert("A + B é menor do que 20!")
	} else {if((c)>(e)){
				alert("A + B é maior do que 20!")
	} 		else {
				alert("A + B é igual a 20!")
	}
		
	}
}