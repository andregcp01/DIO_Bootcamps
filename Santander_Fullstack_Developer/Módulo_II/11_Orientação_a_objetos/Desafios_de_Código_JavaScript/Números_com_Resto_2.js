function desafioJavaScript(N) {
	
	for (let i=0; i < 10000; i++) {
		if (i % N == 2) {
			console.log(`${i}`)
		}
	}
	
}

console.log(desafioJavaScript(1000));
