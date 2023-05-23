import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio/Index"
import SobreMim from "./paginas/SobreMim/Index"
import Menu from "./Componentes/Menu/Index"
import Rodape from "Componentes/Rodape";

// console.log(window.location)

//pathname do window.location é o nome da página que estamos acessando
// const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />

function AppRoutes() {
  return(
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
