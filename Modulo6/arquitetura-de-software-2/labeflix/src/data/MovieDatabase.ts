import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = 'LABEFLIX_MOVIE'

    createMovie = async ({id, title, description, duration_in_minutes, years_of_release   }:any):Promise<void> =>{
        await BaseDatabase.connection
            .insert(
                {id,
                 title,
                 description,
                 duration_in_minutes,
                 years_of_release
                }
            ).into(MovieDatabase.TABLE_NAME)
    }
    
    showMovie = async ():Promise <void>=>{
        await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
            .select()
    }
}