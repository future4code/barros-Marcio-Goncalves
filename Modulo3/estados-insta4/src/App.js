import React from 'react';
import Post from './components/Post/Post';
import { MainContainer } from "./styledComponents"

function App() {

  const PostList = [
    {nomeUsuario:'Antonio Nunes',
    fotoUsuario: "https://picsum.photos/50/49",
    fotoPost:"https://picsum.photos/50/51",
    },

    {nomeUsuario:'Poderoso Castiga',
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost:"https://picsum.photos/50/52",
    },

    {nomeUsuario:'Sr Madruga',
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost:"https://picsum.photos/50/53",
    },
  ]

  const PostComponent = PostList.map((valor, index)=>{
    return(
      <li key={index}><Post nomeUsuario={valor.nomeUsuario} fotoUsuario={valor.fotoUsuario} fotoPost={valor.fotoPost}/></li>
    )
  })
  console.log(PostList);
return(
  <MainContainer><ul>{PostComponent}</ul></MainContainer>
  )
}


export default App;
