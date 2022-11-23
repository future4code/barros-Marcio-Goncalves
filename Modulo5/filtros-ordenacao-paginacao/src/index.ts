import express,{query, Request, Response} from 'express'
import cors from 'cors'
import { connection } from './dataBase/connection'

const PORT = 3003
const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", async(req:Request, res:Response)=>{

    const name = req.query.name as string

    const result = await connection("aula48_exercicio")
    .select().where(`name`, `like`, `%${name}%`)
    res.send(result)
})

app.get("/users/:typeUser", async(req:Request, res:Response)=>{

    const typeUser = req.params

    const result = await connection("aula48_exercicio")
    .select().where(`typeUser`,`like`, `%${typeUser}%`)
    res.send(result)
})

app.get("/users/filter", async(req:Request, res:Response)=>{

    // const nameColumn = req.params
    // const name = req.query.name as string
    // const typeUser = req.query.type as string

    const result = await connection("aula48_exercicio")
    .select()
    // .orderBy("",  "ASC")
    res.send(result)
})

app.get("/userss", async(req:Request, res:Response)=>{
    
    let page = req.query.page

    let offset = 5 * (Number(page) -1)

    const result = await connection("aula48_exercicio")
    .select()
    .limit(5)
    .offset(offset)

    res.send(result)
})


 app.listen(PORT,()=>{console.log(`SERVER IS RUNNING IN PORT ${PORT}`);
})