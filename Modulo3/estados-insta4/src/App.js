import React, { useState } from 'react';
import Post from './components/Post/Post';
import { MainContainer } from "./styledComponents"

function App() {

  const [ListPost, SetListPost] = useState(
    {nomeUsuario:'Madruguinha',
    fotoUsuario: "https://picsum.photos/50/49",
    fotoPost:"https://picsum.photos/50/51",
    },
  )

  const PostList = [
    {nomeUsuario:'Madruguinha',
    fotoUsuario: "https://picsum.photos/50/49",
    fotoPost:"https://picsum.photos/50/51",
    },
  ]


  const PostComponent = PostList.map((valor, index)=>{
    return(
      <>
        <li key={index}><Post nomeUsuario={valor.nomeUsuario} fotoUsuario={valor.fotoUsuario} fotoPost={valor.fotoPost}/></li>
      </>
    )
  })
  console.log(PostList);

return(
  <>
    <MainContainer><ul>{PostComponent}</ul></MainContainer>
  </>
  )
}


export default App;
