function namelength(){
	var a = document.getElementById("name").value;
	var b = document.getElementById("surname").value;
	var c = 0;

	let firstName = (a);
		alert(`Certo! Seja bem vindo ${firstName}!`);
	
	let secondName = (b);
		alert(`Beleza! Seu sobrenome é ${secondName}`);
	
	let fullName = `${firstName} ${secondName}`;
		alert(`Então seu nome é: ${fullName}`);
	
	let nameLength = (firstName.length);  
	alert(`Seu primeiro nome tem: ${nameLength} letras!`)
	
	let surnameLength = (secondName.length);
	alert(`Seu segundo nome tem: ${surnameLength} letras!`)
}