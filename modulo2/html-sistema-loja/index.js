const produtos = [
    {codigoProduto:1, nome:"Xiaomi MI 11", disponivel:10},
    {codigoProduto:2, nome:"Xiaomi Poco X3 Pro", disponivel:5},
    {codigoProduto:3, nome:"Xiaomi MI BAND 5", disponivel:7},
    {codigoProduto:4, nome:"Xiaomi Note 10", disponivel:6},
    {codigoProduto:5, nome:"Xiaomi Poco F3", disponivel:2},
]

const disponivel = ()=>{
   const buscar = produtos.filter((produto)=>{
        id = document.getElementById("idProduto")
       return produto.codigoProduto == id.value
   })
   for(let i = 0;i<buscar.length;i++){
       
   }
//    return document.getElementById("display1").innerHTML = buscar
}

<<<<<<< projeto-portifolio
const adicionar = () =>{
   
=======
const finalizarCompra = ()=>{
    document.getElementById("btnFin").disabled = true
    document.getElementById("loading").style.display = "block"
    setTimeout(() => {
        document.getElementById("loading").style.display = "none"
        document.getElementById("btnFin").disabled = false
        alert("compra realizada com sucesso")
        
        
    }, 3000);
    return 
>>>>>>> local
}