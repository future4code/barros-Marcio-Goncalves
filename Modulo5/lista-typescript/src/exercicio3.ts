type TypeFilme = {
    nome:string,
    anoLancamento:number,
    generoFilme:string,
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const filme:TypeFilme = {
    nome:"BadBoys 2",
    anoLancamento:2003,
    generoFilme:GENERO.ACAO
}

console.table(filme);
