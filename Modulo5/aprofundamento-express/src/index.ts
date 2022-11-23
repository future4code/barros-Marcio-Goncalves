import express, { Response, Request } from 'express'
import cors from 'cors'
import { ToDos } from './data'

const app = express()
const PORT = 3003

app.use(express.json())
app.use(cors())

app.get("/todos",(req:Request, res:Response)=>{
    const completed = ToDos.filter((todo)=>{
        return todo.completed === true
    })
    res.send(completed)
})

app.post("/todos/create/:id",(req:Request, res:Response)=>{
    const userId = req.headers.authorization
    const nameTask = req.body.title

    if(!userId || !nameTask){
        res.send("Nome da tarefa e o id são itens obrigatórios...")
    }

    for(let i = 0;i< ToDos.length; i++){
        if(ToDos[i].id === Number(userId)){
            ToDos.push(
                {
                    userId: ToDos[i].id,
                    id:Date.now(),
                    title:nameTask,
                    completed:false
                }
            )
        }
    }
    res.send(ToDos)
})

app.put("/todos/update",(req:Request, res:Response)=>{
    const updateStatus = req.body.completed
    const userId = req.headers.authorization

    if(!userId || !updateStatus){
        res.send("Nome da nova tarefa e o id são itens obrigatórios...")
    }

    const toDoEdit = ToDos.filter((todo)=>{
        return todo.id === Number(userId)
    })
    
    const EditStatus = toDoEdit.map((todo)=>{
        return todo.completed = updateStatus
    })
    res.send(EditStatus)
})

app.delete('/todos/delete',(req:Request, res:Response)=>{
    const userId = req.headers.authorization

    if(!userId){
        res.send("O id é um item obrigatório...")
    }

    const toDoDel = ToDos.filter((todo)=>{ 
        return todo.id === Number(userId)
    })

    ToDos.splice(Number(userId), 1 )
    res.send(ToDos)
})

app.get("/todos/user",(req:Request, res:Response)=>{
    const userId = req.headers.authorization

    const user = ToDos.filter((user)=>{
        return user.userId === Number(userId)
    })
    const userPosts = user.map((post)=>{
        return post.title
    })
    res.send(userPosts)
})

app.listen(PORT, ()=>{
    console.log(`server is running in port ${PORT}`);
})