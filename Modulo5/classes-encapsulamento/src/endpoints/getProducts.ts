import { ProductsDataBase } from './../class/ProductDataBase';
import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        //const result = await connection(TABLE_PRODUCTS).select()
        const productDB = new ProductsDataBase(connection)
        const result = await productDB.getProduct() 
        
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}