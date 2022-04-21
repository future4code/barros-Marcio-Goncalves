//---------------------------------EXERCICIO 1 INTERPRETACAO DE CODIGO-------------------------------------------

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))  
console.log(minhaFuncao(10))  
 

// a) O que vai ser impresso no console? 

// console.log(minhaFuncao(2))    10
// console.log(minhaFuncao(10))   50

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

// executaria o codigo normalmente
// nao apareceria nada no console

//---------------------------------EXERCICIO 2 INTERPRETACAO DE CODIGO-------------------------------------------


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


// a. Explique o que essa função faz e qual é sua utilidade
//    Esta verificando se existe a paçavra "cenoura" e transforma a frase em minuscula

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`      --- eu gosto de cenoura
//      ii.  `CENOURA é bom pra vista`  --- cenoura é bom pra vista 
//      iii. `Cenouras crescem na terra`--- cenouras crescem na terra

//---------------------------------EXERCICIO 1-A ESCRITA DO CODIGO-------------------------------------------

const imprimirMensagem = () =>{
    console.log("Eu sou Marcio, tenho 28 anos, moro em Minas Gerais e sou estudante da LABENU.");
}

imprimirMensagem()

//---------------------------------EXERCICIO 1-B ESCRITA DO CODIGO-------------------------------------------

const imprimirMensagemB = (nome,idade,endereco,profissao) =>{
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`);
}

imprimirMensagemB("Marcio",28,"Minas Gerais","Tecnico em Seguranca Eletronica")

//---------------------------------EXERCICIO 2-A ESCRITA DO CODIGO-------------------------------------------


const soma = (num1, num2) =>{
    return num1 + num2
}

console.log(soma(5,10));

//---------------------------------EXERCICIO 2-B ESCRITA DO CODIGO-------------------------------------------

const igualdade = (num1,num2) =>{
    return num1 >= num2
}

console.log(igualdade(5,10));

//---------------------------------EXERCICIO 2-C ESCRITA DO CODIGO-------------------------------------------

const numeroPar = (num1) =>{
    
    let divisao = num1 % 2
    let par = divisao == 0
    return par
}

console.log(numeroPar(14));

//---------------------------------EXERCICIO 2-D ESCRITA DO CODIGO-------------------------------------------





//---------------------------------EXERCICIO 3 ESCRITA DO CODIGO---------------------------------------------

let numero1 = Number(prompt("Digite numero 1"))
let numero2 = Number(prompt("Digite numero 2"))

const adicao = (num1,num2) =>{
    return  num1 + num2 
}
console.log(adicao(numero1,numero2));


const diferenca = (num1,num2) =>{
    return  num1 - num2 
}
console.log(diferenca(numero1,numero2));

const multiplicacao = (num1,num2) =>{
    return  num1 * num2 
}
console.log(multiplicacao(numero1,numero2));

const divisao = (num1,num2) =>{
    return  num1 / num2 
}
console.log(divisao(numero1,numero2));






