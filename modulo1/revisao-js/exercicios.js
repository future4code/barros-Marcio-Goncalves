// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b ) => a - b )
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let pares = []
  for(i=0;i<array.length;i++){
    if(array[i] % 2 === 0){
      pares.push(array[i])
    }
  }
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let paresElevados = []
  for(i=0;i<array.length;i++){
    if(array[i] % 2 === 0){
     expo = array[i] ** 2
     paresElevados.push(expo)
    }
  }
    return paresElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for(i=0;i<array.length;i++){
    if(array[i] > maiorNumero){
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
// if (num1 > num2) {
//     maiorNumero = num1
//     menorNumero = num2
// } else if( num2 > num1){
//     maiorNumero = num2
//     menorNumero = num1
// } else if(num1 === num2){
//     maiorNumero = num1
//     menorNumero = num2
// }

// if(maiorNumero %= menorNumero === 0){

// }

//   return newObject = {
//     "maiorNumero":maiorNumero,
//   //  "maiorDivisivelPorMenor":maiorDivisivelPorMenor,
//     // "diferenca":diferenca
//   }
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  // let escaleno = "Escaleno"
  // let isoceles = "Isósceles"
  // let equilatero = "Equilátero"

  // if(ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
  //   return escaleno
  // } else if((ladoA && ladoB === ladoC) || (ladoB && ladoC === ladoA)){
  //     return equilatero
  // } else if(ladoA || ladoB === ladoC || ladoB || ladoC === ladoA || ladoC || ladoA === ladoB){
  //   return isoceles
  // }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let chamada = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
   console.log(chamada);
   return chamada
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
      return { ...pessoa, nome:"ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  for(i=0;i<pessoas.length;i++){

    if(pessoas[i].altura >= 1.5 && pessoas[i].idade > 14 && pessoas[i].idade < 60) {
      console.log(pessoas[i]);
    }
  }
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}