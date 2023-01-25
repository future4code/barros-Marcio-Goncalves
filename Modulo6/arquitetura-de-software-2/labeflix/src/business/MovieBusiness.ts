import { MovieDatabase } from "../data/MovieDatabase"
import {v4 as generateId} from 'uuid'

export class MovieBusiness {
    createMovie = async ({id,title,description,duration_in_minutes, years_of_release}:any):Promise <void>=>{
        try {
            if(!title || !description || !description || !duration_in_minutes || !years_of_release){
                throw new Error('Todos os dados náo foram inseridos.')
            }

            const id = generateId()

            const movieDatabase = new MovieDatabase()
            await movieDatabase.createMovie({
                id,
                title, 
                description, 
                duration_in_minutes, 
                years_of_release})
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
    showMovie = async ():Promise <void>=>{
        try {
            const movieDatabase = new MovieDatabase()
            movieDatabase.showMovie()
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}