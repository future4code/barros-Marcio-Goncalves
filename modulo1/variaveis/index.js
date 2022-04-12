
// EXERCICIO DE INTERPRETAÇÃOD E CODIGO

//-----1-----

let a = 10
let b = 10
console.log(b)
b = 5
console.log(a, b)

// 10
//10, 5

//-----2-----

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

// 10,10,10

//-----3-----

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

// p = horasTrabalhadas
//t = pagamentoDia

// EXERCICIO DE ESXRITA DE CODIGO

//-----1.A.B.C.D-----

let nome = undefined
let idade = undefined
console.log(typeof nome, idade )


// Porque nao foi definido nenhum nome(valor) à variavel


//-----1.E-----

nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")

//-----1.F-----

console.log(typeof nome, idade)
// Agora sim foi definida um valor para NOME e IDADE.

//-----1.G-----

let nome = undefined
let idade = undefined

nome = prompt('Digite seu nome')
idade = prompt('Digite sua idade')

console.log('ola',nome,'voce tem', idade, 'anos')


//-----2-----


let corSapato = prompt('Qual a cor do sapato?')
console.log(corSapato)

let corChinelo = prompt('Qual a cor do chinelo?')
console.log(corChinelo)

let corBlusa = prompt('Qual a cor da blusa')
console.log(corBlusa)

//-----3-----


let a = prompt("VALOR DO A")
let b = prompt("VALOR DO B1")
let c = undefined


c=a
a=b
b=c


alert(a)
alert(b)