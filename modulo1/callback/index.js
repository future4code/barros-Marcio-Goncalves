//--------------------------------------EXERCICIO 1 DE INTERPRETAÇÃO DE CODIGO---------------------------------------

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  // Ele retorna todos os objetos do array

//--------------------------------------EXERCICIO 2 DE INTERPRETAÇÃO DE CODIGO---------------------------------------

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  // [Amanda Rangel, Lais Petra, Leticio chijo]

//--------------------------------------EXERCICIO 3 DE INTERPRETAÇÃO DE CODIGO---------------------------------------

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//   // [Mandi, Laura]
//  

//--------------------------------------EXERCICIO 1 DE ESCRITA DE CODIGO---------------------------------------------

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//              // A
//  const nomeDoguinhos = pets.map((item)=>{
//     return item.nome;
//  })
// console.log(nomeDoguinhos);
//             // B
// const apelidoSalsicha = pets.filter((item)=>{
//     return item.raca == "Salsicha";
//  })
// console.log(apelidoSalsicha);
            // C

// const desconto = pets.filter((item, index)=>{return item.raca === "Poodle"})
//                  pets.map((item)=>{})

// console.log(desconto);
 



//--------------------------------------EXERCICIO 2 DE ESCRITA DE CODIGO---------------------------------------------

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
                    // A
//  const nomeProdutos = produtos.map((item)=>{
//      return item.nome
//  })

//  console.log(nomeProdutos);
 
                    // B

     
                    // C
    //     const filtrar = (produto)=>{
    //         return produto.categoria==="Bebidas"
    // }

    // const array2 = produtos.filter(filtrar)
    // console.log(array2);

                    // D

    // const filtrar = (produto)=>{
    //     return produto.nome.includes("Ypê")
    // }

    // const array2 = produtos.filter(filtrar)
    // console.log(array2);

                    // E

    // const filter = produtos.filter(item =>
    //     item.nome.includes("Alface"))
    // console.log(filter);

    // const filtrar = (produto)=>{
    //     return produto.nome.includes("Ypê")
    // }

    // const frase = (produto)=>{
    //     let criarFrase = `Compre ${produto.nome} por ${produto.preco}`
    //     return criarFrase
    // }

    // const array2 = produtos.filter(filtrar).map(frase)
    // console.log(array2);

