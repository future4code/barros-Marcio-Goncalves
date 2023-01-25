import { UserBusiness } from './../business/UserBusiness';
import {Request, Response} from 'express'

export class UserController{
    createUser = async (req:Request, res:Response):Promise <void> =>{
        
        try {
            const input:any= {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            }

            const userBusinner = new UserBusiness()
            await userBusinner.createUser(input)

            res.status(201).send('Usuario criado do sucesso')
        } catch (error:any) {
            res.send(error.message)
        }
    }

    getUser = async (req:Request, res:Response):Promise <void>=>{
        try {
            const userBusiness = new UserBusiness()
            await userBusiness.getUser()
        } catch (error:any) {
            res.status(400).send(error.message);
        }
    }
}