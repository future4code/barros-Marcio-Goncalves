import { User } from '../types/user';
import { BaseDatabase } from './BaseDatabase';


export class UserDataBase extends BaseDatabase{
    createUser = async (user:User)=>{
        try {
            await UserDataBase.connection 
            .insert({
                id: user.id,
                name : user.name,
                email: user.email,
                password: user.password
            })
            .into('User_Arq')
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    
    getUser = async ():Promise <void>=>{
        try {
            await UserDataBase.connection('User_Arq')
                .select()
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    deleteUser = ()=>{}

}