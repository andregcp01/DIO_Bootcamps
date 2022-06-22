function add(){
	var a = document.getElementById("t1").value;
	var b = document.getElementById("t2").value;
	var c = (parseInt(a)+parseInt(b));
	var d = 10;
	var e = 20;
	//alert(parseInt(a)+parseInt(b));
	if((a)==(b)){
		alert("A e B são iguais!");
	}else {
		alert("A e B não são iguais");
	}
	if((c)<(d)) {
		alert("A soma de A e B é MENOR do que 10!");
	}else {if((c)<(e)) {
			alert("A soma de A e B é MAIOR do que 10 e MENOR do que 20!");
		}else {
			alert("A soma de A e B é MAIOR do que 20, consenquentemente, MAIOR do que 10!")
		}
	}
	//if((c)<(e)){
	//	alert("A soma de A e B é MENOR do que 20!");
	//}else{
	//	alert("A soma de A e B é MAIOR do que 20!");
	//}
}
