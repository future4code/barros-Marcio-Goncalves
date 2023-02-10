import { UserControler } from './../controller/userController';
import  express  from 'express';


export const userRouter = express.Router()
const userController = new UserControler()

userRouter.post('/create', userController.insertUser)
userRouter.post('/login', userController.login)