type TypeUsers = 
    {
        id: number,
        name: string,
        phone:number,
        email:string,
        website:string,
        post:[
            {
                id:number,
                title:string,
                body:string,
                userId:number
            }
        ]
    }
  
export const users:TypeUsers[] = [
    {
        id:456321312,
        name:"teste",
        phone:123456789,
        email:"teste@gmail.com",
        website:"http://localhost:3003",
        post:[
            {
                id:Date.now(),
                title:"xxxxx",
                userId: 456321312,
                body:"dsfkjhsdkjf"
            },
            

        ]
    },
    {
        id:4547844,
        name:"teste2",
        phone:123456789,
        email:"teste@gmail.com",
        website:"http://localhost:3003",
         post:[
            {
                id:4547844,
                title:"aaaaaaaaa",
                userId:Date.now(),
                body:"fdslpfdsjklfdsojdslfkdslkfsdfsd"
            }
        ]
    },
    // {
    //     id:274456375,
    //     name:"teste2",
    //     phone:123456789,
    //     email:"teste@gmail.com",
    //     website:"http://localhost:3003",
    //      post:[
            
    //     ]
    // },
]