import { AuthenticatorType } from './../model/user';
import * as jwt from "jsonwebtoken";

export class Authenticator{
    generateToken = ({id}:AuthenticatorType)=>{
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: '1h'}
        )
        return token
    }

    getToken = (token: string):AuthenticatorType=>{
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticatorType
        return payload
    }
}