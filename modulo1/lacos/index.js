//----------------------------- EXERCICIO 1 DE INTERPRETAÇÃO DE CÓDIGO---------------------------------------------------

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//o codigo esta incrementando valor... no log ele aparecerá o numero 5

//----------------------------- EXERCICIO 2 DE INTERPRETAÇÃO DE CÓDIGO---------------------------------------------------

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// A--sera impresso o maior numero, no caso o 30
//B--

//----------------------------- EXERCICIO 3 DE INTERPRETAÇÃO DE CÓDIGO---------------------------------------------------

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// "****" resultado impresso

//----------------------------- EXERCICIO 1 DE ESCRITA DE CÓDIGO---------------------------------------------------------

// const quantidadeAnimais = Number(prompt("quantos animais de estimação voce tem?"))
// let animais = []

// if(quantidadeAnimais === 0){
//     console.log(`Que pena! Voce pode adotar um pet`);
// }else{
//     for(let i = 0; i < quantidadeAnimais ; i++ ){
//       let nomeAnimal =  prompt("Digite o nome dos animais")
//         animais.push(nomeAnimal)
        
//     }
//     console.log(animais);
// }

//----------------------------- EXERCICIO 2-A DE ESCRITA DE CÓDIGO---------------------------------------------------------

// const arr = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// function imprimeNumero(){
//     return arr;
// }

// console.log(imprimeNumero());

//----------------------------- EXERCICIO 2-B DE ESCRITA DE CÓDIGO---------------------------------------------------------

// const arr = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// function dividePor10(){
    
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i] / 10);
       
//           }
// }

// dividePor10();
//----------------------------- EXERCICIO 2-C DE ESCRITA DE CÓDIGO---------------------------------------------------------
// const arr = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const pares = []
// function numerosPares(){
//     for(let i = 0; i < arr.length; i++){
//       let resto = arr[i] % 2
//       if(resto === 0){
//           pares.push(arr[i])
//       }
//       console.log(pares);
//     }    
// }

// numerosPares()

//----------------------------- EXERCICIO 2-D DE ESCRITA DE CÓDIGO---------------------------------------------------------

// const arr = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// function novoArray(){
//     let arrString = []
//     for(let i=0;i<arr.length;i++){
//         arrString.push(`O elemento do index ${i} é ${arr[i]},`)
//     }
//     return arrString
// }

// console.log(novoArray());
//----------------------------- EXERCICIO 2-E DE ESCRITA DE CÓDIGO---------------------------------------------------------


// const arr = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let valorMinimo = arr[0]
// let valorMaximo = arr[0]

// function maiorNumero(){
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] > valorMaximo) {
//             valorMaximo = arr[i]
//             }                  
//         }
//         return valorMaximo
// }

// console.log(maiorNumero());

// function menorNumero(){
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] < valorMinimo) {
//             valorMinimo = arr[i]
//             }                  
//         }
//         return valorMinimo
// }

// console.log(menorNumero());

     
