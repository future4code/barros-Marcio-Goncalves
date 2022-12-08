import { TABLE_USERS } from './../database/tableNames';
import { User } from './User';
import { Knex }from "knex";

export class UserDataBase{
    constructor(private connection:Knex){
        this.connection = connection;
    }
    public async insertUser(newUser:User){
       await this.connection(TABLE_USERS).insert({ newUser })
    }

    public async getUsers(){
       const result = await this.connection(TABLE_USERS).select()
        return result 
    }
}