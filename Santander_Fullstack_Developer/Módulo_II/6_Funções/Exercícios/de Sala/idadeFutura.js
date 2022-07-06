const jogador1 = {
		nome: "Vinícius Júnior",
		nota: 9,
		idade: 21,
		equipe: "Real Madrid",
	};

const jogador2 = {
		nome: "Neymar",
		nota: 7,
		idade: 30,
		equipe: "Paris Saint Germain",
	};
	
const jogador3 = {
		nome: "Moisés",
		nota: 5,
		idade: 25,
		equipe: "Fortaleza",
	};
	
const jogador4 = {
		nome: "Robson",
		nota: 4,
		idade: 31,
		equipe: "Fortaleza",
	};

function idadeFutura(anos) {
	
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(idadeFutura.call(jogador1, 9))

console.log(idadeFutura.call(jogador2, 9))

console.log(idadeFutura.apply(jogador3, [9]))

console.log(idadeFutura.apply(jogador4, [9]))
