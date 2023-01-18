import { UserController } from './controller/UserController';
import {app} from "./app"

const userController = new UserController()

app.post('/user', userController.createUser)
app.get('/user', userController.getUser)

