// -------------------------------EXERCICIO 1 DE INTERPRETACAO DE CODIGO----------------------------------------------

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
//  o codigo faz uma verificação se o numero digitado é par ou impar.
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//  pares
// c) Para que tipos de números a mensagem é "Não passou no teste"?
// impares
// -------------------------------EXERCICIO 2 DE INTERPRETACAO DE CODIGO----------------------------------------------

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
//      para identificar o preco das frutas
// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//      2.25
// c) Considere que um usuário queira comprar uma `Pêra`, 
// qual seria a mensagem impressa no console se retirássemos o 
// `break` que está logo acima do `default` (o `break` indicado pelo comentário 
// "BREAK PARA O ITEM c.")?
//      o preco da fruta seria de 5 reais, pois nao teria o break para encerrar o processo da pera


// -------------------------------EXERCICIO 3 DE INTERPRETACAO DE CODIGO----------------------------------------------

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//  a) O que a primeira linha está fazendo?
//          Esta guardando um valor inserido pelo usuario em uma constante.
//  b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//      se digitar 10 aparecera que o valor passou no teste, se for o numero -10, aparecera um erro de nao declaração da variavel mensagem
//  c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//      sim, havera um erro! porque o log nao consegue imprimir o valor de uma variavel que nao seja global

    

// -------------------------------EXERCICIO 1 DE ESCRITA DE CODIGO----------------------------------------------

// const idade = Number(prompt("Digite sua idade"))

// if(idade >= 18){console.log("Voce ja pode dirigir");}
// else{console.log("Voce ainda nao pode dirigir");}

// -------------------------------EXERCICIO 2 DE ESCRITA DE CODIGO----------------------------------------------

// const turno = prompt(`Digite

//  M para (Matutino), 
//  V para (Verpertino)
//  N para (Noturno),

//   para saber qual o seu turno`)

//   if (turno === "m") {
//       console.log("Bom dia");
//   } else if(turno === "v"){
//       console.log("Boa tarde");
//   }else if (turno === "n") {
//       console.log("Boa noite");
//   } else{
//       console.log("Turno nao encontrado...");
//   }

// -------------------------------EXERCICIO 3 DE ESCRITA DE CODIGO----------------------------------------------

// const turno = prompt(`Digite

//  M para (Matutino), 
//  V para (Verpertino)
//  N para (Noturno),

//   para saber qual o seu turno`)

//   switch (turno) {
//       case "m":
//         console.log("Bom dia")
//              break;

//       case "v":
//         console.log("Boa tarde")
//              break;
      
//       case "n":
//         console.log("Boa noite")
//               break;
        
//       default:
//           console.log("Turno nao encontrado");
//           break;
//   }

// -------------------------------EXERCICIO 4 DE ESCRITA DE CODIGO----------------------------------------------

// const genero = prompt("Qual o genero do filme")
// const valorIngresso = Number(prompt("Qual o valor do ingresso"))

// genero === "fantasia" && valorIngresso <= 15 ? console.log("bom filme") : console.log("Escolha outro filme");

// -------------------------------DESAFIO 1 DE ESCRITA DE CODIGO----------------------------------------------

// const genero = prompt("Qual o genero do filme")
// const valorIngresso = Number(prompt("Qual o valor do ingresso"))
// let lanche = prompt("Qual lanche voce quer comprar? tempos pipoca, chocolate, doces, nutella")

// genero === "fantasia" && valorIngresso <= 15 ? console.log(`bom filme e aproveite seu(sua) ${lanche}`) : console.log("Escolha outro filme");

// -------------------------------DESAFIO 2 DE ESCRITA DE CODIGO----------------------------------------------

// const nome = prompt("Digite seu nome completo")
// const tipoJogo = prompt("digite o tipo do jogo")
// const etapaJogo = prompt("Digite a etapa do jogo")
// const categoria = prompt("Digite a categoria")
// const quantidade = Number(prompt("Quantidade de ingressos"))
// let valorTotal
// let valor

// if (tipoJogo === "nacional"){

//     if (etapaJogo === "semi-final") {

        
//         if (categoria === "cat1") {valor = 1320}
//         else if (categoria === "cat2") {valor = 880}
//         else if (categoria === "cat3") {valor = 550}
//         else if (categoria === "cat4") {valor = 220}
//         else {console.log("Categoria nao encontrada");}
//     }
//     else if (etapaJogo === "decisao de terceiro") {
        
//         if (categoria === "cat1") {valor = 660}
//         else if (categoria === "cat2") {valor = 440}
//         else if (categoria === "cat3") {valor = 330}
//         else if (categoria === "cat4") {valor = 170}

//     }
//     else if (etapaJogo === "final") {

        
//         if (categoria === "cat1") {valor = 1980}
//         else if (categoria === "cat2") {valor = 1320}
//         else if (categoria === "cat3") {valor = 880}
//         else if (categoria === "cat4") {valor = 330}
//     }
//     else {
//         console.log("Etapa do jogo nao encontrado");
//     }

// /*-----*/
// }else if(tipoJogo === "internacional"){

//     if (etapaJogo === "semi-final") {

        
//         if (categoria = "cat1") {valor = 1320}
//         else if (categoria === "cat2") {valor = 880}
//         else if (categoria === "cat3") {valor = 550}
//         else if (categoria === "cat4") {valor = 220}
//         else {console.log("Categoria nao encontrada");}
//     }
//     else if (etapaJogo === "decisao de terceiro") {
        
//         if (categoria === "cat1") {valor = 660}
//         else if (categoria === "cat2") {valor = 440}
//         else if (categoria === "cat3") {valor = 330}
//         else if (categoria === "cat4") {valor = 170}

//     }
//     else if (etapaJogo === "final") {

        
//         if (categoria === "cat1") {valor = 1980}
//         else if (categoria === "cat2") {valor = 1320}
//         else if (categoria === "cat3") {valor = 880}
//         else if (categoria === "cat4") {valor = 330}
//     }
//     else {
//         console.log("Etapa do jogo nao encontrado");
//     }    

// }else{
//     console.log("tipo jogo nao encontrado");
// }

// if (tipoJogo === "nacional") {
//     valorTotal = quantidade * valor

//     alert(`
 

//     ---Dados da Compra---
// Nome do cliente:          ${nome}
// Tipo do jogo:             ${tipoJogo}
// Etapa do jogo:            ${etapaJogo}
// Categoria:                ${categoria}
// Quantidade de ingressos:  ${quantidade} ingressos
//     ---Valores---
// Valor do ingresso:  R$    ${valor}
// Valor total:        R$    ${valorTotal}
// `);
//     }
//     else if (tipoJogo === "internacional") {
     
//      valorTotal = (quantidade * valor / 4.10)
//      alert(`
 

//      ---Dados da Compra---
// Nome do cliente:          ${nome}
// Tipo do jogo:             ${tipoJogo}
// Etapa do jogo:            ${etapaJogo}
// Categoria:                ${categoria}
// Quantidade de ingressos:  ${quantidade} ingressos
//      ---Valores---
// Valor do ingresso:  U$    ${valor} 
// Valor total:        U$    ${valorTotal} 
// `);
     
//  }






