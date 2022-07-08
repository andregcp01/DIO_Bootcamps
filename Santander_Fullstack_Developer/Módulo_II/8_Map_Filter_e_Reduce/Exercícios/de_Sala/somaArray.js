function somaArray(arr) {
	return arr.reduce(function(prev, current) {
		console.log({prev});
		console.log({current});
		return prev + current;
	});
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Reduce SOMA ->",somaArray(arr));

console.log(" ");

console.log("Array original ->", (arr));