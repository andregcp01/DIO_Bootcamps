interface: idUsuario {
	id: string;
	email: string;
	cargo?: "funcionário" | "gerente" | "coordenador" | "supervisor"
}

function redirecione(usuario: idUsuario | idAdministrador) {
	if (usuario.cargo) {
	//redirecionar(usuario.cargo);
	}
	
	//redirecionar para a área do usuário;
}