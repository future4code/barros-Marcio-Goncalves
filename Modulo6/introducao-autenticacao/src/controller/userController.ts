import { inputDTO, UserInputDTO } from './../model/DTOS';
import { UserBusiness } from './../business/userBusiness';
import { Request, Response } from "express"

export class UserControler{
    userBusiness = new UserBusiness()

    insertUser = async (req: Request, res:Response)=>{
       try {
        const {email, password} = req.body

        const userData:UserInputDTO = {
            email, 
            password
        } 

        const token  = await this.userBusiness.insertUser(userData)
        res.status(200).send({message: 'usuario criado', token})
       } catch (error:any) {
            res.status(400).send(error.message)
       }
    }

    login = async (req: Request, res:Response)=>{
        try {
            const {email, password} = req.body
            const userData:UserInputDTO = {
                email,
                password
            }

        const token = await this.userBusiness.login(userData)
        res.status(200).send({message: 'Logado com sucesso', token})
        
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}