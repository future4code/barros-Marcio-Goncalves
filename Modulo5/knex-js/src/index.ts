import express from "express"
import cors from "cors"
import { Request, Response } from "express"
import { connection } from './dataBase/connection'
import { connect } from "http2"

const PORT = 3003
const app = express()

app.use(express.json())
app.use(cors())


const searchActor = async (name: string): Promise<void> =>{
    const result = await connection.raw(
        `
        SELECT * from Actor where name = "${name}"
    `
    )
    return result[0]
}

const gender = async (gender:string):Promise <void>=>{
    const result = await connection.raw(`
        SELECT count(*) as count from Actor where gender = ${gender}
    `)
    return result[0].count
}

const editSalary = (id:number, editSalary:number)=>{
    
    const result = connection("Actor").update(
        {
            salary:editSalary
        }
    ).where(
        {
            id: id
        }
    )
    return result
}

const removeActor = (id:number)=>{
    
    const result = connection("Actor").delete(
        
    ).where(
        {
            id:id
        }
    )
    return result
}


app.patch("actor",(req:Request, res:Response)=>{
    const {id, value} = req.body
    connection("Actor").update(
        {
            salary: value
        }
    ).where( 
        {
            id:id
        }
    )
        res.status(200).send("Salario alterado")
})

app.delete("actor",(req:Request, res:Response)=>{
    const id = req.params
    connection("Actor").delete().where( 
        {
            id:id
        }
    )
        res.status(200).send("usuario deletado")
})






app.listen(PORT,()=>{console.log(`SERVER IS RUNNING IN PORT ${PORT}`);
})