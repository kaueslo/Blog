import Banner from "Componentes/Banner";
import { Outlet } from "react-router-dom";

//Outlet é uma tag do react-router-dom que mapeia as páginas que estão dentro da tag <Route>
//na rota no routes.js
export default function PaginaPadrao(){
    return(
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}