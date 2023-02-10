import { generateId } from './../services/generateId';
import { Userdatabase } from './../database/userDatabase';
import { inputDTO, UserInputDTO } from './../model/DTOS';
import { Authenticator } from '../services/authenticator';
import { User } from '../model/user';
export class UserBusiness {
    userdatabase = new Userdatabase()
    authenticator = new Authenticator()

    insertUser = async (userData:UserInputDTO)=>{
        try {

            const {email, password} = userData

            if(!email) throw new Error('Please enter an email address')
            if(!password) throw new Error('Please enter an password')
            if(!email.includes('@')) throw new Error('Please enter an valid email format')
            if(password.length < 6 ) throw new Error('Password must contain at least 6 characters')

            const id:string = generateId()

            const user:User= {
                id,
                email,
                password
            }    

            this.userdatabase.insertUser(user)
            const token = this.authenticator.generateToken({id})
            return token

        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    login = async (userData:UserInputDTO)=>{

        const {email, password } = userData;

        if(!email) throw new Error('Please enter an email address')
        if(!password) throw new Error('Please enter an password')
        if(!email.includes('@')) throw new Error('Please enter an valid email format')

        const user = await this.userdatabase.login(email)

        if(!user) throw new Error('User Not Found')
        if(user.password !== password)  new Error('Password invalid')

        const token = this.authenticator.generateToken({id:user.id})
        return token
    }
}