export class Product {
    constructor(private name:string, private price:number){
        this.name = name
        this.price = price
    }

    getName(){
        return this.name
    }

    getPrice(){
        return this.price
    }
}