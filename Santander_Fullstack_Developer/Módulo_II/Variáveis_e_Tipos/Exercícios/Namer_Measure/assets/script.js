function namelenght(){
	var a = document.getElementById("name").value;
	var b = document.getElementById("surname").value;
	
	let firstName = (a);
		alert(`Certo! Seja bem vindo ${firstName}!`);
		
	let secondName = (b);
		alert(`Beleza! Seu sobrenome é ${secondName}`);
	
	let fullName = firstName + " " + secondName;
		alert(`Então seu nome é: ${fullName}`);

}