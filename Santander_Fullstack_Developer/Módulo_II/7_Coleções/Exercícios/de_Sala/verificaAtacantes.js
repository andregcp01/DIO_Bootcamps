function getAtacantes(map) {
	let atacantes = [];
	for ([key, value] of map) {
		if (value === "Atacante") {
			atacantes.push(key);
		}
	}
	return atacantes;
}

const jogadores = new Map();

jogadores.set("Marcelo Boeck", "Goleiro");
jogadores.set("Silvio Romero", "Atacante");
jogadores.set("Zé Welisson", "Volante");
jogadores.set("Romarinho", "Atacante");

console.log(getAtacantes(jogadores))