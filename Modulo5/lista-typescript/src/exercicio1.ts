

const nameDate = (name:string, date:string):string=>{
    return `Olá me chamo ${name}, nasci no dia ${date.split("/")[0]} do mês de ${date.split("/")[1]} do ano de ${date.split("/")[2]}`
}

console.table(nameDate("ana","24/10/1992"))

