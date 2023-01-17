export class Carro {
    public marca:string;
    public cor:string;

    constructor(marca:string, cor:string){
        this.marca = marca
        this.cor = cor
    }

    public getMarca(){
        return this.marca
    }

    public getCor(){
        return this.cor
    }

    public setMarca(newMarca:string){
        this.marca =  newMarca
    }

    public setCor(newCor:string){
        this.cor = newCor
    }

    public acelerar(){
        console.log(`O carro da cor ${this.cor} e marca ${this.marca} está acelerando...`);
    }

    public freiar(){
        console.log(`O carro da cor ${this.cor} e marca ${this.marca} está freando...`);
    }
} 
