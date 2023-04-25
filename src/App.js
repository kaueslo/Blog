import { BrowserRouter } from "react-router-dom";
import Inicio from "./paginas/Inicio/Index"
import SobreMim from "./paginas/SobreMim/Index"

// console.log(window.location)

//pathname do window.location é o nome da página que estamos acessando
// const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />

function App() {
  return(
    <BrowserRouter>
      
    </BrowserRouter>
  );
}

export default App;
