import { ProductsDataBase } from './../class/ProductDataBase';
import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../class/Product"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        const newProduct = new Product(name,price)
        const productDB = new ProductsDataBase(connection)

        //await connection(TABLE_PRODUCTS).insert({ newProduct })
        productDB.insertProduct(newProduct)

        
        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}