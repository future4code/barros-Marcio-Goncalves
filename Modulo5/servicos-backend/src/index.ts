import axios from 'axios'
import express,{Request, Response} from "express"
import cors from 'cors'
import { getAddressInfo } from "./services/getAddress"


const PORT = 3003
const app = express()

app.use(express.json())
app.use(cors())

app.post("/Address", (req:Request, res:Response)=>{
    let data
    const { number, complement, cep } = req.body
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((resp)=>{console.log(resp.data);
    })
    // res.send(data)
    // console.log(data);
    
    
})


app.listen(3003, () => {
    console.log(`SERVER IS RUNNING IN PORT ${PORT}`);
});