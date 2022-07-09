import './App.css';
import {Container,} from './style'
import Header from './components/Cabecalho';
import LayoutTelaPrincipal from './components/LayoutTelaPrincipal';
import FinalRodape from './components/Rodape';



function App() {
  return(
    <Container> 
      <Header></Header>
      <LayoutTelaPrincipal></LayoutTelaPrincipal>
      <FinalRodape></FinalRodape>
    </Container>
);
}

export default App;