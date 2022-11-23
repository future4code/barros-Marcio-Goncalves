console.log("funcionando");

const myString:string = "teste"

enum colorFav {
    RED= "Vermelho",
    ORANGE="Laranja",
    YELLOW="Amarelo",
    GREEN="Verde",
    BLUE="Azul",
    ANIL="Anil",
    PURPLE="Violeta"
}  

type Person = {
    name:string,
    age:number,
    colorFavourite:colorFav,
}

const user1:Person ={
    name:"teste1",
    age:10,
    colorFavourite:colorFav.YELLOW
}

const user2:Person ={
    name:"teste1",
    age:10,
    colorFavourite:colorFav.BLUE
}

const user3:Person ={
    name:"teste1",
    age:10,
    colorFavourite:colorFav.RED
}


