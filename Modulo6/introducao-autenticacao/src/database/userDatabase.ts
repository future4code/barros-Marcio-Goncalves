import { User } from '../model/user';
import { Authenticator } from '../services/authenticator';
import { UserInputDTO } from './../model/DTOS';
import { BaseDatabase } from './baseDatabase';

export class Userdatabase extends BaseDatabase
{

    insertUser = async (user:User)=>{

        const {id, email, password} = user

       try {
           await Userdatabase.connection
               .insert(
                   {
                        id,
                        email,
                        password
                   })
               .into('UsersAuth')        
    } 
        catch (error:any) {
            throw new Error(error.message);    
        }
    }

    login = async (email : string)=>{
        const result = await Userdatabase.connection('UsersAuth').select().where({email})
        return result[0]
    }
}