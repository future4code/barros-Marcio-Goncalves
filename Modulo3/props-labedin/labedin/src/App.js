import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImgPerfil from './imgs/perfil.jpg';
import ImgCtts from './imgs/ctts.png';
import ImgBr from './imgs/br.png';
import ImgEmail from './imgs/email.png'
import ImgEndereco from './imgs/endereco.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImgPerfil} 
          nome="Márcio Emmanuel Gonçalves" 
          descricao="Oi, eu sou o Márcio, atualmente sou técnico em segurança eletrônica há dois anos. Gosto muito de praticar esportes e sair com amigos nos meus momentos livres!"
        />
        
        <ImagemButton 
          imagem={"https://cdn-icons-png.flaticon.com/512/271/271210.png"} 
          texto="Ver mais"
        />
        
        <CardPequeno
          imagem={ImgEmail}
          tittle='Email'
          descricao='M-Emmanuel-G@gmail.com'
        />

        <CardPequeno
          imagem={ImgEndereco}
          tittle='Endereço'
          descricao='Avenida Torres, 441, Monte Gomes, Alvorada-MG'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImgCtts} 
          nome="Central Tecnica de Tecnologia em Segurança" 
          descricao="Técnico em segurança eletrônica" 
        />
        
        <CardGrande 
          imagem={ImgBr}  
          nome="Rede de Postos BR" 
          descricao="Frentista, lubrificador" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
