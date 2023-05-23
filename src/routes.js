import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio/Index"
import SobreMim from "./paginas/SobreMim/Index"
import Menu from "./Componentes/Menu/Index"
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";

// console.log(window.location)

//pathname do window.location é o nome da página que estamos acessando
// const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />

function AppRoutes() {
  return(
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element ={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>

        {/*
          Na rota "/", a estrutura ser renderizada é:
          
          <PaginaPadrao>
            <Inicio />
          </PaginaPadrao>

          Na rota "/Sobremim", a estrutura a ser renderizada é:

          <PaginaPadrao>
            <SobreMim />
          </PaginaPadrao>
        */}
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
