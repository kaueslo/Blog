import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio/Index"
import SobreMim from "./paginas/SobreMim/Index"

// console.log(window.location)

//pathname do window.location é o nome da página que estamos acessando
// const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
