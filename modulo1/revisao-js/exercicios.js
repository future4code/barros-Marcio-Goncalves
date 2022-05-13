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
  let divisivel
if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
} else if( num2 > num1){
    maiorNumero = num2
    menorNumero = num1
} else if(num1 === num2){
    maiorNumero = num1
    menorNumero = num2
}
maiorNumber = maiorNumero // backup do maior numero...
menorNumber = menorNumero // backup do menor numero...
divisivel = maiorNumero %= menorNumero;

if (divisivel === 0) {
  divisivel = true
} else {
  divisivel = false
}

diferenca = maiorNumber - menorNumber
  return newObject = {
    "maiorNumero":maiorNumber,
   "maiorDivisivelPorMenor":divisivel,
    "diferenca":diferenca
  }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
 
let numero = n * 2
let pares = []
  for(let i=0;i<numero; i++){
    if (i %2 == 0) {
      pares.push(i)
    }
    console.log(pares);
  }	
  return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if((ladoA !== ladoB && ladoA !== ladoC) && (ladoB !== ladoC && ladoB !== ladoA) && (ladoC !== ladoB && ladoC !== ladoA)){
    return("Escaleno")
   }  else if((ladoA === ladoB && ladoA === ladoC)||(ladoB === ladoC && ladoB === ladoA)||(ladoC === ladoA && ladoC === ladoB)){
    return("Equilátero")
  }   else if((ladoA === ladoB || ladoC)||(ladoB === ladoC || ladoA)||(ladoC === ladoA || ladoB)){
    return "Isósceles"
  }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  console.log(array.sort((a, b ) => a - b ));
  return [array[array.length -2],  array[1]]
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`
  
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
      return { ...pessoa, nome:"ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = []
  for(i=0;i<pessoas.length;i++){

    if(pessoas[i].altura >= 1.5 && pessoas[i].idade > 14 && pessoas[i].idade < 60) {
      pessoasAutorizadas.push(pessoas[i])
      console.log(pessoas[i]);
    }
  }
  return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = []
  for(i=0;i<pessoas.length;i++){

    if((pessoas[i].idade < 15 || pessoas[i].idade > 60) || (pessoas[i].altura < 1.5) ) {
      pessoasNaoAutorizadas.push(pessoas[i])
      console.log(pessoas[i]);
    }
  }
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  const saldo = contas.map((conta)=>{
    
    let soma = 0
    for(let i=0;i<conta.compras.length;i++){
       soma += conta.compras[i]
    }
    resultado = conta.saldoTotal - soma
    return { ...conta, saldoTotal:resultado, compras:[]}
})
  return saldo

}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const ordenarNome = consultas.sort((a,b)=>{
   return a.nome.localeCompare(b.nome)
  })
  return ordenarNome
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
  const ordenarData = consultas.sort((a,b)=>{
    return a.dataDaConsulta.localeCompare(b.dataDaConsulta)
   })
   console.log(ordenarData);
   return ordenarData
 }

