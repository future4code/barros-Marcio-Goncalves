// --------------------------======================================= PARTE 2 -----------------------
// --------------------------===================================CADASTRO DE CLIENTS -----------------------

// let clients = [
//     {id:1, name:"Fulano"},
//     {id:2, name:"Ciclano"},
//     {id:3, name:"Beltrano"},
//     {id:4, name:"Fulana"},
// ]

// const cadClients = confirm("Deseja cadastrar um novo cliente?")

// const idRandon = ()=>{
//     return Math.floor(Math.random() * 1000)
// }

// if(cadClients == true){
//     console.log("sim");
//     const nameClient = prompt("Digite o nome do cliente.")
//     clients.push(
//         {
//             id:idRandon(), 
//             name:nameClient,
//         }
//     )
//     console.log(clients);
// }

// else if( cadClients == false){
//     console.log("nao");
// }

// --------------------------===================================TABUADA  -----------------------

// const number = Number(prompt("Digite um número de 1 a 10..."))

// const timesTable = [
//     `5 x 1 = ${5 * 1}`, 
//     `5 x 2 = ${5 * 2}`, 
//     `5 x 3 = ${5 * 3}`, 
//     `5 x 4 = ${5 * 4}`, 
//     `5 x 5 = ${5 * 5}`, 
//     `5 x 6 = ${5 * 6}`, 
//     `5 x 7 = ${5 * 7}`, 
//     `5 x 8 = ${5 * 8}`, 
//     `5 x 9 = ${5 * 9}`, 
//     `5 x 10 = ${5 * 10}`, 
// ]

// const get = () => {
//     return timesTable.slice(0, number)
// }
// if(number < 1 || number > 10){
//     console.log("ERRO: O número deve ser entre 1 ao 10");
//     alert("ERRO: O número deve ser entre 1 ao 10");
// }
// else if(number >= 0 && number <= 10 ){
//     console.log(get());
//     alert(get());
// }
// else{
//     console.log("ERRO: Deve ser um número");
//     alert("ERRO: Deve ser um número");
// }


// --------------------------===================================   PARTE 3  -----------------------
// --------------------------===================================   CADASTRO DE CONTAS  -----------------------

// const contas = [
// 	{
// 		email: "astrodev@labenu.com",
// 		password: "abc123"
// 	},
// 	{
// 		email: "bananinha@gmail.com",
// 		password: "bananinha"
// 	}
// ]
// const email = prompt("Digite seu email...")
// const password = prompt("Digite sua senha...")

// const createAccount = ()=>{
//     email.indexOf("@") <=0 ? errorUser(): ""
//     password.length < 6 ? errorPassword() : ""
//     if(email.indexOf("@") > 0 && password.length > 5){
//         addAccount()
//     }
// }

// const addAccount = ()=>{
//     contas.push(
//         {
//             email:email,
//             password:password,
//         }
//     )
//     console.log("Conta criada com sucesso...");
//     console.log(contas);
// }

// const errorUser = ()=>{
//     console.log('ERRO: Formato de email inválido...');
// }

// const errorPassword = ()=>{
//     console.log("ERRO: A senha deve conter 6 caracteres...");
// }

// createAccount()

// --------------------------===================================   PARTE 4  -----------------------
// --------------------------===================================   LISTA UNICA -----------------------

const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

console.log(
    primeiraLista.filter((str)=>{
        return str.nome === "Banana"
    })
);

getList = ()=>{

}

