function add(){
	var a = document.getElementById("t1").value;
	var b = document.getElementById("t2").value;
	var c = (parseInt(a)+parseInt(b));
	var d = 10;
	var e = 20;
	//alert(parseInt(a)+parseInt(b));
	switch (a) {
		case (b):
			alert("A e B são iguais!");
			break;
		default:
			alert("A e B são diferentes!");
			break;
	}
	if((c)/d>1){
		alert("A soma de A + B é maior do que 10!");
	} else {
			if((c)/d<1){
				alert("A soma de A + B é menor do que 10!");
		} else {
			alert("A soma de A + B é igual a 10!")
		}
	}
	
}