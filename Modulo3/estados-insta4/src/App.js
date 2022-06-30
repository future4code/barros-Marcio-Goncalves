import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import perfil1 from './img/perfil1.jfif';
import perfil2 from './img/perfil2.jfif';
import perfil3 from './img/perfil3.jfif';
import tecperfil1 from './img/tecperfil1.jpg';
import tecperfil2 from './img/tecperfil2.jfif';
import tecperfil3 from './img/tecperfil3.jfif';


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'Antonio Nunes'}
            fotoUsuario={perfil1}
            fotoPost={tecperfil1}
          />
           <Post
            nomeUsuario={'Poderoso Castiga'}
            fotoUsuario={perfil2}
            fotoPost={tecperfil2}
          />
           <Post
            nomeUsuario={'Antenor'}
            fotoUsuario={perfil3}
            fotoPost={tecperfil3}
          />
  </div>
)

}


export default App;
