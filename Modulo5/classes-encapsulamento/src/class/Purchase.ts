export class Purchase{
    private userId:string
    private productId:string
    private quantity:number
    private totalPrice:number

    constructor(userId:string, productId:string, quantity:number, totalPrice:number ){
        this.userId = userId
        this.productId = productId
        this.quantity = quantity
        this.totalPrice = totalPrice
    }

    public getQuantity(){
        return this.quantity
    }
    public getTotalPrice(){
        return this.totalPrice
    }
    public getProductId(){
        return this.productId
    }
    public getUserId(){
        return this.userId
    }

}