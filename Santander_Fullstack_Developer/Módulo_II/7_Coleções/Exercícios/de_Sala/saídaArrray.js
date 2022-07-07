const meusNúmeros = [1, 2, 3, 44, 50, 660, 789]

function meusValores(arr) {
	const meuSet = new Set(arr);
	
	return meuSet;
}

console.log(meusValores(meusNúmeros)); //Resultado com o Set

function meusValoresArray(arr) {
	const meuSet = new Set(arr);
	
	return [...meuSet];
}

console.log("------------------------------------");

console.log("Array");

console.log(meusValoresArray(meusNúmeros)); //Resultado em Array