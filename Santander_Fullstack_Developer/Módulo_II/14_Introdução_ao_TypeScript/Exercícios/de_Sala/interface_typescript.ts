// types
// interfaces

interface randomAnimal {
	nome: string;
	tipo: "terrestre" | "aquático" | "voador";
	executarMiado(alturaEmDecibeis: number): void;
}

interface animalCaseiro extends randomAnimal {
	domestico: boolean;
}

const animal: randomAnimal {
	nome: "Tartaruga",
	tipo: "aquático",
	
}

const felino: animalCaseiro {
	nome: "Gato",
	tipo: "terrestre",
	domestico: true,
	executarMiado(alturaEmDecibeis) => ("${alturaEmDecibeis}dB")
}

animal.executarMiado("s")
