import { UserDataBase } from "../data/userDataBase";



export class UserBusiness{
    createUser = async (input:any):Promise <void>=>{
         try {
            const id = Date.now().toString();

            const { name, email, password} = input
            const userDatabase = new UserDataBase()

            await userDatabase.createUser({
                id,
                name,
                email,
                password
            })

         } catch (error:any) {
            throw new Error(error.message)
         }
    }
    
    getUser = async ():Promise <void>=>{
        try {
            const userDataBase = new UserDataBase()
            await userDataBase.getUser()
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}