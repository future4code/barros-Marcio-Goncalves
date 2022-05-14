// 1° Leia o código abaixo

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console? 
// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo", horario: "14h"

// 2° Leia o código abaixo

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?

// // Juca
// // 3
// // SRD

// // Juba
// // 3
// // SRD

// // Juco
// // 3
// // SRD

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// // faz uma copia do objeto mencionado

// 3° Leia o código abaixo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// // console.log(minhaFuncao(pessoa, "backender")) false
// console.log(minhaFuncao(pessoa, "altura")) 
// nome: "Caio", 
//   idade: 23, 
//   backender: false

// a) O que vai ser impresso no console?

// // false

// //   nome: "Caio", 
// //   idade: 23, 
// //   backender: false,
// //   altura:

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu

// ----------------------------------------EXERCICIO 1 ESCRITA DE CODIGO--------------------------------

// const pessoa1 = {
//     nome:"Amanda",
//     apelido:["Amandinha","Mandinha" ,"Mandi"],
// }

// function recebe(pessoa1) {
//     return pessoa1
// }

// console.log(recebe(pessoa1));

// const pessoa2 = {
//     ...pessoa1,
//     apelido:["juca", "tuca", "tiao",]
// }

// console.log(recebe(pessoa2));

// ----------------------------------------EXERCICIO 2 ESCRITA DE CODIGO--------------------------------

// const object2 ={

//     nome:"joana",
//     idade:"40",
//     profissao:"empreendedora",
// }

// function receber(){
//     return  [object2.nome, object2.nome.length, object2.idade, object2.profissao, object2.profissao.length]
// }

// console.log(receber());



// ----------------------------------------EXERCICIO 3 ESCRITA DE CODIGO--------------------------------

// let carrinho = []

// const fruta1 ={

//     nome:"abacaxi",
//     disponibilidade:true,

// }

// const fruta2 ={

//     nome:"pera",
//     disponibilidade:true,

// }

// const fruta3 ={

//     nome:"uva",
//     disponibilidade:true,

// }

// function adicionar() {
//     carrinho.push(fruta1,fruta2,fruta3)
// }

// adicionar();
// console.log(carrinho);