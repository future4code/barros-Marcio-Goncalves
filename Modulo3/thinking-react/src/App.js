import './App.css'
import Filter from "./components/filter";
import Carrinho from "./components/carrinho";
import Principal from "./components/principal";

function App() {
  return (
    <div className="Container">
      <Filter/>
      <Principal/>
      <Carrinho/>
    </div>
    
  );
}

export default App;
