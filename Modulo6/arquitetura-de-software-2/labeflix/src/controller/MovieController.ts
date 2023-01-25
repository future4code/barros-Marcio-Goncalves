import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

export class MovieController{
    createMovie = async (req:Request, res:Response):Promise <void>=>{
        try {
            const { title, description, duration_in_minutes, years_of_release } = req.body;
            const movieBusiness = new MovieBusiness()
            await movieBusiness.createMovie({title, description, duration_in_minutes, years_of_release})
            res.status(201).send('Filme foi adicionado com sucesso.')
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
    showMovie = async (req:Request, res:Response):Promise <void>=>{
        try {
            const movieBusiness = new MovieBusiness()
            res.status(200).send(movieBusiness)
        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }
}