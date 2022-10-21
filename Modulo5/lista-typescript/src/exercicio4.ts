type TypeColaboradores = {
    nome:string,
    salário:number,
    setor:string,
    presencial:boolean
}

enum ENUMCOLAB {
    FINANCEIRO = 'financeiro',
    VENDAS = 'vendas',
    MARKETING = 'marketing'
}

const colaboradores:TypeColaboradores[] = [
	{ nome: "Marcos", salário: 2500, setor: ENUMCOLAB.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: ENUMCOLAB.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: ENUMCOLAB.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: ENUMCOLAB.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: ENUMCOLAB.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: ENUMCOLAB.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: ENUMCOLAB.MARKETING, presencial: true }
]

const filtrarColab =  colaboradores.filter((colaborador)=>{
        return colaborador.setor === ENUMCOLAB.MARKETING && colaborador.presencial === true
        })
  

console.table(filtrarColab);
