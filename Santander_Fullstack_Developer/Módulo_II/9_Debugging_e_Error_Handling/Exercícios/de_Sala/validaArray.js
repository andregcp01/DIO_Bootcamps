function validaArray(arr, num) {
	try {
		if(!arr & !num) throw new ReferenceError("Envie os parâmetros!");
	
	if(typeof arr !== "object")
		throw new TypeError("O Array precisa ser do tipo OBJECT!");
	
	if(typeof num !== "number")
		throw new TypeError("O Array precisar ser do tipo NUMBER!");
	
	if(arr.length !== num)
		throw new RangeError("Tamanho do Array inválido!");
	
	return arr;
	}
	
	catch(e) {
		if(e instanceof ReferenceError) {
			console.log("Este é um ReferenceError!");
			console.log(e.message);
			//console.log(e.name);
			//console.log(e.stack);
		} else if(e instanceof TypeError) {
			console.log("Este é um TypeError!");
			console.log(e.message);
		} else if(e instanceof RangeError) {
			console.log("Este é um RangeError!");
			console.log(e.message);
		} else {
			console.log("Ocorreu um erro não esperado:" + e);
		}
	}
}

console.log("Erro (1)");
console.log(validaArray());
console.log(" ");

console.log("Erro (2)");
console.log(validaArray(19, 21));
console.log(" ");

console.log("Erro (3)");
console.log(validaArray([], "maracujá"));
console.log(" ");

console.log("Erro (4)");
console.log(validaArray([], 5));
console.log(" ");

console.log("Sucesso!");
console.log(validaArray([1, 2, 3, 4, 5], 5));
