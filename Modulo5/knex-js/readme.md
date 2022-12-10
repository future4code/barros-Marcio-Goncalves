#----------Exercicio 1----------
    a) Temos uma resposta do banco de dados inteiro.

    b)
        const searchActor = async (name: string): Promise<any> =>{
        const result = await connection.raw(
        `
            SELECT * from Actor where name = "${name}"
        `
            )
        return result[0]
        }


    c)
        const gender = async (gender:string):Promise <void>=>{
        const result = await connection.raw(`
            SELECT count(*) as count from Actor where gender = ${gender}
        `)
        return result[0].count
        }

#----------Exercicio 2----------
    a)
        const salary = (id:number, editSalary:number)=>{
    
    const result = connection.update(
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

    b)

    const removeActor = (id:number)=>{
    
    const result = connection.delete(
        
    ).where(
        {
            id:id
        }
    )
    return result
}

    c)


#----------Exercicio 3----------
    a)

    b)

    c)


#----------Exercicio 4----------
    a)
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

    b)
        app.delete("actor",(req:Request, res:Response)=>{
        const id = req.params
        connection("Actor").delete().where( 
            {
                id:id
            }
        )
            res.status(200).send("usuario deletado")
    })