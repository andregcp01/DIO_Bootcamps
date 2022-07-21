// na HTML <input id="input" type="text" placeholder="Digite os dados!" />

const input = document.getElementById("input") as HTMLInputElement;
//input.value

input.addEventListener("input", (event) => {
	const a = event.currentTarget as HTMLInputElement;
	console.log(a.value);
});

