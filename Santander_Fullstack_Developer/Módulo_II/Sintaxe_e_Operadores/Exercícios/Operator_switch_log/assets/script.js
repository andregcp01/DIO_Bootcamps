function add(){
	var a = document.getElementById("t1").value;
	var b = document.getElementById("t2").value;
	var c = (parseInt(a)+parseInt(b));
	var d = 10;
	var e = 20;
	var n, m;
	//alert(parseInt(a)+parseInt(b));
		
	switch (a) {
		case (b):
			alert("A e B são iguais!");
			break;
		default:
			alert("A e B são diferentes!");
			break;
	}
	
	if((c/d)>1) {
		n = 2;
	} else {
		if((c/d)<1) {
			n = 1;
		} else {
			n = 0;
		}
	}
	
	switch (n) {
		case 1:
			alert("A soma de A + B é menor do que 10!");
			break;
		case 2:
			alert("A soma de A + B é maior do que 10!");
			break;
		default:
			alert("A soma de A + B é igual a 10!");
			break;
	}
	
	if((c/e)>1) {
		m = 2;
	} else {
		if((c/e)<1) {
			m = 1;
		} else {
			m = 0;
		}
	}
	
	switch (m) {
		case 1:
			alert("A soma de A + B é menor do que 20!");
			break;
		case 2:
			alert("A soma de A + B é maior do que 20!");
			break;
		default:
			alert("A soma de A + B é igual a 20!");
			break;
	}
}