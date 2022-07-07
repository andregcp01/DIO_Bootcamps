const meusNúmeros = [19, 21, 04, 23, 17, 99, 256, 1370]

//function meusValores(arr) {
	//const meuSet = new Set(arr);
	
	//return meuSet;
//}

//console.log(meusValores(meusNúmeros)); //Resultado com o Set

function meusValoresArray(arr) {
	const meuSet = new Set(arr);
	
	return [...meuSet];
}

console.log(meusValoresArray(meusNúmeros)); //Resultado em Array