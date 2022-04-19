// -----------EXERCICIO INTERPRETAÇÃO DE CODIGO------------

let array
console.log('a. ', array)
// a. undefined

array = null
console.log('b. ', array)
// b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// c. 11 (quantidade de elementos dentro do array)

let i = 0
console.log('d. ', array[i])
// d. 0

array[i+1] = 19
console.log('e. ', array)
//

const valor = array[i+6]
console.log('f. ', valor)
// f. 6

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ONIBUS EM MIRROCOS,  27

// -----------EXERCICIO ESCRITA DE CODIGO------------

//                    EXERCICIO 1

let nome = prompt("Digite seu nome")
let email = prompt("Digite seu e-mail")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vinda(o) ${nome}`);

//                    EXERCICIO 2

let comidas = ["arroz","feijao","batata","alface","frango",];
console.log(comidas);
console.log(`Essas sao minhas comidas preferidas:
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`);

let comidaPreferida = prompt("Qual sua comida preferida")
comidas.splice(1,1,)
comidas.splice(1,0, comidaPreferida)
console.log(`Essas sao minhas comidas preferidas:
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`);

//                    EXERCICIO 3

let listaDeTarefas = []
let tarefa1 = prompt("Digite sua primeira tarefa diaria")
let tarefa2 = prompt("Digite sua segunda tarefa diaria")
let tarefa3 = prompt("Digite sua terceira tarefa diaria")
let indiceParaRemover = Number(prompt("Digite o indice para remover uma tarefa"))

listaDeTarefas.push(tarefa1,tarefa2,tarefa3)
console.log(listaDeTarefas);


listaDeTarefas.splice(listaDeTarefas[indiceParaRemover - 1],1)
console.log(listaDeTarefas);

//                    DESAFIO 1



//                    DESAFIO 2


let frutas = ["Banana","Morango","Abacaxi","Laranja","Ameixa"]

console.log(frutas.indexOf("Abacaxi"));
console.log(frutas.length)