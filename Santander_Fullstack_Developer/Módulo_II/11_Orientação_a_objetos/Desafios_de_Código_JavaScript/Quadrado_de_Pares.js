function desafioJavaScript(N) {
	
	for (let i=0; i < N; i++) {
		if (i == 0) {
			let a = i;
			let b = a**2;
		}
		else {
			if (i % 2 == 0) {
				let a = i;
				let b = a**2;
				console.log(`${a}^2 = ${b}`);
			}
			
		}
	}
	
	if (N % 2 == 0) {
		let c = N**2;
		console.log(`${N}^2 = ${c}`);
	}
	
}

console.log(desafioJavaScript(19));
