import express, { Request, response, Response } from "express"
import cors from 'cors'
import { users } from "./data"

const app = express()
const PORT = 3003

app.use(express.json())
app.use(cors())

app.get("/posts",(req:Request, res:Response)=>{
    const viewPost = users.map((user)=>{ return user.post.map((post)=>{ return post.body})}) 
    res.send(viewPost)
})

app.get("/posts/:id",(req:Request, res:Response)=>{
    const userId = req.headers.id
    if(!userId){
        res.send("Id usuario inválido...")
    }
    const viewPost = users.filter((user)=>{
        return user.id === Number(userId)
    })
    const viewPostUser = viewPost.map((user)=>{ return user.post.map((post)=>{ return post.body})})
    res.send(viewPostUser) 
})

app.listen(PORT,()=>{
    console.log(`servidor criado na porta ${PORT}`);
})