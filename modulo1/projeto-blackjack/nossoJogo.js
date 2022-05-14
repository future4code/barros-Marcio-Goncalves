/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   //  console.log("Bem vindo ao jogo de Blackjack!")
   //  let pergunta = confirm("Deseja iniciar uma nova rodada?")
    
   //  if (pergunta === false) {
   //    console.log("O jogo acabou")
   //  }
   //  else{
   //     console.log("a rodada vai ser iniciada... Boa Sorte!");;
   //  }

   //  let v1Jogador = comprarCarta()
   //  let v2Jogador = comprarCarta() 
   //  let v1Computador = comprarCarta()
   //  let v2Computador = comprarCarta()
   //  let pontJogador = v1Jogador.valor + v2Jogador.valor
   //  let pontComputador = v1Computador.valor + v2Computador.valor

   //  if (pontJogador > pontComputador) {
   //     console.log("O jogador venceu");
   //  } else if(pontJogador < pontComputador){
   //    console.log("O Computador venceu");
   //  }else { 
   //    console.log("EMPATE");
   //  }
   

   //  console.log(`Jogador - Cartas: ${v1Jogador.texto}, e ${v2Jogador.texto} pontuação: ${(v1Jogador.valor + v2Jogador.valor)}`);
   //  console.log(`Computador - Cartas: ${v1Computador.texto}, e ${v2Computador.texto} pontuação: ${(v1Computador.valor + v2Computador.valor)}`);

   // -----------------------------DESAFIO

   // let pergunta = confirm("Deseja iniciar uma nova rodada?")

//     let usuario = []            // Objeto
//     let valUsuarios = []        // valor das cartas
//     const blackjack = 21       // soma do valor das cartas
//     usuario.unshift(comprarCarta())
//     usuario.unshift(comprarCarta())
//     let numUsuario1 = usuario[0].valor
//     let numUsuario2 = usuario[1].valor
//     valUsuarios.unshift(numUsuario1)
//     valUsuarios.unshift(numUsuario2)
//     let usuarioSoma = usuario[0].valor + usuario[1].valor

//     let computador = []            // Objeto
//     let valComputador = []        // valor das cartas       // soma do valor das cartas
//     computador.unshift(comprarCarta())
//     computador.unshift(comprarCarta())
//     let numComputador1 = computador[0].valor
//     let numComputador2 = computador[1].valor
//     valComputador.unshift(numComputador1)
//     valComputador.unshift(numComputador2)
//     let computadorSoma = computador[0].valor + computador[1].valor
   
//    let perg = confirm(`                           Bem vindo ao Blackjack...
   
//                            Deseja iniciar o jogo?`)

//    if (perg === true) {
      
//          const jogadaUsuario = ()=>{
//          usuario.unshift(comprarCarta())
//          usuarioSoma += usuario[0].valor
       
//    }

//    while (usuarioSoma < blackjack) {
//       let pergUsuario = confirm(`                          Sua pontuação é: ${usuarioSoma}, 

//                           Deseja comprar outra carta?`)
//       if (pergUsuario === true) {
//          jogadaUsuario()
//       } else { break}
      
//    }  

//    alert("Jogada do Computador")  


//    const jogadaComputador = ()=>{

//       computador.unshift(comprarCarta())
//       computadorSoma += computador[0].valor
      

//    }

//    if (computadorSoma < blackjack && computadorSoma < usuarioSoma) {
//       while (computadorSoma < blackjack) {
//          jogadaComputador()
//       }
//    } else{
//       while(1==1){
//          break
//       }
//    }

// }
  
//       if(usuarioSoma > blackjack){
//          alert(`Usuario perdeu`);
//       } else if(computadorSoma > blackjack && computadorSoma < usuarioSoma){
//          alert(`Usuario ganhou`);
//       } else if( computadorSoma == usuarioSoma){
//          alert(`Empate`);
//       } else if(perg === false){
//          alert(`Voce perdeu por desistencia`);
//       }
   

   