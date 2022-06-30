import './App.css';
import './style'
import  Topo  from "./components/Cabecalho";
import  TelaInicial  from "./components/telaInicial";
import  RodapeFinal  from "./components/rodape";


function App() {
  return (
    <div className="App">
      <Topo></Topo>
      <TelaInicial></TelaInicial>
      <RodapeFinal></RodapeFinal>
    </div>
  );
}

export default App;
