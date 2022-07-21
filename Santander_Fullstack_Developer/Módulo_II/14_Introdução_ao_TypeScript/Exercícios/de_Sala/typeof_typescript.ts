// types
// interfaces

interface randomAnimal {
	nome: string;
	tipo: "terrestre" | "aquático" | "voador";
	executarMiado(alturaEmDecibeis: number): void;
	executarLatido(alturaEmDecibeis: number): void;
}

interface animalCaseiro extends randomAnimal {
	domestico: boolean;
}

interface familiaFelidae extends  randomAnimal {
	porte: "pequeno" | "médio" | "grande";
}

interface familiaCanidae extends randomAnimal {
	porte: "pequeno" | "médio" | "grande"; 
}

const animal: randomAnimal {
	nome: "Tartaruga",
	tipo: "aquático",
	
}

type animalFamilia = familiaFelidae | familiaCanidae;

const canidae: animalCaseiro {
	nome: "Cachorro",
	tipo: "terrestre",
	porte: "médio",
	domestico: true,
	executarLatido(alturaEmDecibeis) => ("${alturaEmDecibeis}")
}

const felino: animalCaseiro {
	nome: "Gato",
	tipo: "terrestre",
	porte: "pequeno",
	domestico: true,
	executarMiado(alturaEmDecibeis) => ("${alturaEmDecibeis}dB")
}

