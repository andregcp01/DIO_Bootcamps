function namelength(){
	var a = document.getElementById("name").value;
	var b = document.getElementById("surname").value;
	var x = 0;
	
	let firstName = (a);
		if((a)!=x) {
			alert(`Certo! Seja bem vindo ${firstName}!`);
		} else {
			firstName = "João";
			alert(`Humm, então você é o tal do João..`);
		}
	
	let secondName = (b);
		if((b)!=x) {
			alert(`Beleza! Seu sobrenome é ${secondName}`);
		} else {
			secondName = "das Neves";
			alert(`Ok então, já sei qual deve ser..`);
		}
	
	let fullName = `${firstName} ${secondName}`;
		if((fullName) == "João das Neves") {
			alert (`Então, seu nome é ${fullName} e VOCÊ NÃO SABE NADA!`);
		} else {
			alert(`Então, seu nome é ${fullName}`);
		}
	
	let nameLength = (firstName.length);  
	alert(`Seu primeiro nome tem: ${nameLength} letras!`);
	
	let surnameLength = (secondName.length);
		if((secondName)="das Neves") {			
			alert(`Seu segundo nome tem: 8 letras!`);
		} else {
			alert(`Seu segundo nome tem: ${surnameLength} letras!`);
		}
}