//function filtraPares(arr) {			// Maneira mais curta de resolver
//	return arr.filter(function(item) {
//		return item % 2 === 0;
//	});
//}

function filtraPares(arr) {
	return arr.filter(numeropar); 
}

function numeropar(item) {
	return item % 2 === 0;
}

function filtraImpares(arr) {
	return arr.filter(numeroimpar);
}

function numeroimpar(item) {
	return item % 2 !== 0;
}

const mySequence = [1, 22, 33, 45, 66, 78, 99, 100]

console.log("Array Par",filtraPares(mySequence));

console.log(" ");

console.log("Array Ímpar",filtraImpares(mySequence));

console.log(" ");

console.log("Array original",(mySequence));
