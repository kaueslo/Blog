import { NavLink } from 'react-router-dom'
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to}) {
    //useLocation é o hook do reactrouterdom, vai retornar algo q tá sendo atribuído da localização
    //ele retorna o pathname tbm
   // const localizacao = useLocation();
   // coloca esse código com o location, quando usa a tag Link
   //${localizacao.pathname === to ? styles.linkDestacado : ""}

    //console.log(localizacao)

    //Usamos o Link, pois é do react-router-dom, pra página não recarregar
  return (
    <NavLink
      className={({ isActive }) =>`
        ${styles.link}
        ${isActive ? styles.linkDestacado : ""}
      `}
      to={to}
      end>
      {children}
    </NavLink>
  );
}
