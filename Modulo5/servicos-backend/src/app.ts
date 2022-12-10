import express from "express"
import cors from 'cors'

const PORT = 3003
const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log(`SERVER IS RUNNING IN PORT ${PORT}`);
});