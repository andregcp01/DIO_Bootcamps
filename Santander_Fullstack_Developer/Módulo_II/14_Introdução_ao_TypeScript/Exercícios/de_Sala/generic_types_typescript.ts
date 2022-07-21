// generic types

function adicionaLista<NaoSei>(array: NaoSei[], valor: NaoSei) {
	return array.map(() => valor);
}

adicionaLista(["1", "2", "3"], "2");
