interface idUsuario {
	id: string;
	email: string;
}

interface idAdministrador extends idUsuario{
	cargo: "gerente" | "coordenador" | "supervisor";
}

function redirecione(usuario: idUsuario | idAdministrador) {
	if ("cargo" in usuario) {
		// redirecionar para a  área da administração
	}
	// redirecionar para a  área da administração
}

