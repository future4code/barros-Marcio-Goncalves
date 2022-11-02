import express,{Request, Response} from 'express'
import cors from 'cors'
import { products } from './data'

const PORT = 3003
const app = express()
const idRandon = Math.floor(Math.random()* 99999999)

app.use(express.json())
app.use(cors())

app.get('/test',(req:Request, res:Response)=>{
    try{
        res.status(201).send(`SERVER IS RUNING IN PORT ${PORT}`)     
    }
    catch{

    }
})

app.post('/addProduct',(req:Request, res:Response)=>{
    try{
        const {name ,price} = req.body

        if(!name){
            const erro = new Error("Nome do produto não foi informado...")
            erro.name = "nameNotFound"
            throw erro
        }

        if(!price){
            const erro = new Error("Preço do produto não foi informado...")
            erro.name = "priceNotFound"
            throw erro
        }

        products.push(
            {
                id:idRandon,
                name:name,
                price:price
            }
        )
        res.status(201).send(products)
    }
    catch(e:any){
        if(e.name === "nameNotFound"){
            res.status(422).send(e.message)
        }
        if(e.name === "priceNotFound"){
            res.status(422).send(e.message)
        }
        else{
            res.status(500).send(e.message)
        }
    }
})

app.get('/products',(req:Request, res:Response)=>{
    try{
        if(!products){
            const erro = new Error("Nao possui produtos")
            erro.name = "emptyList"
            throw erro
        }
        res.status(200).send(products)
    }
    catch(e:any){
        if(e.name === `emptyList`){
            res.status(400).send(e.message)
        }
    }
})

app.put('/editProduct', (req:Request, res:Response)=>{
    const idProduct = req.headers.authorization
    const {price} = req.body

    const editProduct = products
        .filter((product)=>{return product.id === Number(idProduct)})
        .map((product)=>{ return product.price === price})   
        res.send()
})

app.delete('/deleteProduct', (req:Request, res:Response)=>{
    try{
        const idProduct = req.headers.authorization
        const deleteProduct = products.filter((product)=>{return product.id !== Number(idProduct)})
        if(!idProduct){
            const erro = new Error("Informe o ID do produto...")
            erro.name = "idNotFound"
            throw erro
        }
        res.send(deleteProduct)
    }
    catch(e:any){
        if(e.message === "idNotFound"){
            res.status(404).send(e.message)
        }
    }
})

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNING IN PORT ${PORT}`);
})
