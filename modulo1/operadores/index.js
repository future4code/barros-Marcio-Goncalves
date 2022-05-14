//----------------------EXERCICIO 1-------------------------

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)
//false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// false

console.log("d. ", typeof resultado)
//string false

//----------------------EXERCICIO 2-------------------------

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// ira aparecer a concatenação dos dois numeros,
// pois o prompt retorna uma string, teria que transformá-la em number 

//----------------------EXERCICIO 3-------------------------

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

//----------------------EXERCICIO ESCRITA DE CODIGO 1-------------------------

let ageUser = Number(prompt("Sua idade"))
let ageFriend = Number(prompt("Idade do melhor amigo")) 
let resultado = ageUser > ageFriend
let diferençaDeIdade = ageUser - ageFriend

console.log("Sua idade é maior do que a do seu amigo?",resultado)
console.log("Diferença de idade é de",diferençaDeIdade, "anos")

//----------------------EXERCICIO ESCRITA DE CODIGO 2-------------------------

let numero = Number(prompt("DIGITE UM NUMERO PAR"))
const divisao = 2
let resto

resto = numero %= divisao
console.log(resto)

// o padrao e sempre dar o resto "0"

// ao inserirmos numeros impares, o resto sempre será numero "1"

//----------------------EXERCICIO ESCRITA DE CODIGO 3-------------------------

let idade = Number(prompt("Digite sua idade"))
let idadeEmMeses 
let idadeEmDias 
let idadeEmHoras 
let operadorMes = 12
let operadorDias = 365
let operadorHoras = 8760

idadeEmMeses = idade * operadorMes
idadeEmDias = idade * operadorDias
idadeEmHoras = idade * operadorHoras

alert(idadeEmMeses)
alert(idadeEmDias)
alert(idadeEmHoras)

//----------------------EXERCICIO ESCRITA DE CODIGO 4-------------------------

let numero1 = Number(prompt("DIGITE O PRIMEIRO NUMERO"))
let numero2 = Number(prompt("DIGITE O SEGUNDO NUMERO"))
let restTrue = 0
let restFalse = !0

let result1 = numero1 > numero2
console.log(result1)
let result2 = numero1 == numero2
console.log(result2)


let operacao3 = numero1 %= numero2
let result3 = operacao3 == restTrue
console.log(result3)


let operacao4 = numero2 %= numero1
let result4 = operacao4 == restFalse
console.log(result4)
