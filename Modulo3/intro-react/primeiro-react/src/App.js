import logo from './perfil.jpg';
import './App.css';

function Clicou(){
  alert(`                   Obrigado Labenu, pelo aprendizado... 
  Estou muito feliz por conseguir aprender tanto com vocês!!!`)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Heeey!!! Me chamo Márcio Emmanuel</h1>       
        <img src={logo} className="App-logo" alt="logo" />
        <p className='App-p'>Este é o meu primeiro site com React </p>
        <a className="App-link" href="#" onClick={Clicou} rel="noopener noreferrer"> Clique Aqui </a>
      </header>
    </div>
  );
}

export default App;
