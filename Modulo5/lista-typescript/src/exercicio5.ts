type TypeUsuarios = {
    name:string,
    email:string,
    role:string
}

const usuarios:TypeUsuarios[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

// function admins = (usuarios){
//     return usuarios.filter((user)=>{ user.role})
    
    
// }

function admins(usuarios:TypeUsuarios[]):string[]{
    return usuarios
        .filter((user)=> user.role === "admin")
        .map((user)=>{ return user.email})
}

console.table(admins(usuarios));


