import { TABLE_PRODUCTS } from './../database/tableNames';
import { Product } from './Product';
import { Knex }from "knex";

export class ProductsDataBase{
    constructor(private connection:Knex){
        this.connection = connection;
    }
    public async insertProduct  (newProduct:Product){
       await this.connection(TABLE_PRODUCTS).insert({ newProduct })
    }

    public async getProduct  (){
       const result = await this.connection(TABLE_PRODUCTS).select()
        return result
    }
}