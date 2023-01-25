export class Movie{
    constructor(
        private id:string,
        private title: string,
        private description:string,
        private duration_in_minutes:number,
        private years_of_release:number
    ){}
    getId(){
        return this.id;
    }
    getTitle(){
        return this.title;
    }
    getDescription(){
        return this.description;
    }
    getDuration_in_Minutes(){
        return this.duration_in_minutes;
    }
    getYears_of_release(){
        return this.years_of_release;
    }

    setId(newId:string){
        this.id = newId;
    }
    setTitle(newTittle:string){
        this.title = newTittle;
    }
    setDescription(newDescription:string){
        this.description = newDescription;
    }
    setDuration_in_minutes(newDuration_in_minutes:number){
        this.duration_in_minutes = newDuration_in_minutes;
    }
    setYears_of_release(newYears_of_release:number){
        this.years_of_release = newYears_of_release;
    }
}