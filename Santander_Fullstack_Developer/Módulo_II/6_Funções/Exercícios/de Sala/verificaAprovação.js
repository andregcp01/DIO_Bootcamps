const jogadores = [
	{
		nome: "Vinícius Júnior",
		nota: 9,
		idade: 21,
		equipe: "Real Madrid",
	},
		{
		nome: "Neymar",
		nota: 7,
		idade: 30,
		equipe: "Paris Saint Germain",
	},
	{
		nome: "Moisés",
		nota: 5,
		idade: 25,
		equipe: "Fortaleza",
	},
	{
		nome: "Robson",
		nota: 4,
		idade: 31,
		equipe: "Fortaleza",
	},
];

function verificaAprovacao(arr, media) {
	
	let aprovados = [];
	
	for (let i=0; i < arr.length; i++) {
		
		const {nota, nome} = arr[i];
	
		if (nota >= media) {
			aprovados.push(nome)
		}
	}
	
	return aprovados
}

console.log(verificaAprovacao(jogadores, 5))
