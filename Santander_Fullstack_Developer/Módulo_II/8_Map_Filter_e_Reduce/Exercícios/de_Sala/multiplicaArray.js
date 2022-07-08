function mapAnything(arr) {
	return arr.map(function(item) {
		return item * 2
	});
}

const nums = [3, 6, 9, 12, 15];

console.log("Novo Array ->",mapAnything(nums));

console.log(" ");

console.log("Array original ->",(nums));