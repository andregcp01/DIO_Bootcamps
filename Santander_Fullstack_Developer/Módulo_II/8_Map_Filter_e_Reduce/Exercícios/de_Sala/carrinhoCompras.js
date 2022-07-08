const meuCarrinho = [
	{
		name: "Maçã (1kg)",
		value: 5.8, 
	},
	{
		name: "Goiaba (1kg)",
		value: 3.8,
	},
	{
		name: "Maracujá (1kg)",
		value: 6.2,
	},
	{
		name: "Laranja (1kg)",
		value: 2.4,
	},
	{
		name: "Banana (1kg)",
		value: 3.4,
	},
]

const minhaCarteira = 50;

function carrinhoCompras(minhaCarteira, meuCarrinho) {
	return meuCarrinho.reduce(function(prev, current) {
		console.log({prev});
		console.log({current});
		return prev - current.value;
	}, minhaCarteira);
}

console.log("Saldo final -> R$",(carrinhoCompras(minhaCarteira, meuCarrinho).toPrecision(4)));

console.log(" ");

console.log ("Saldo inicial -> R$", minhaCarteira.toPrecision(4));
