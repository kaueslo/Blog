import { Link, useLocation } from 'react-router-dom'
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to}) {
    //useLocation é o hook do reactrouterdom, vai retornar algo q tá sendo atribuído da localização
    //ele retorna o pathname tbm
    const localizacao = useLocation();

    //console.log(localizacao)

    //Usamos o Link, pois é do react-router-dom, pra página não recarregar
  return (
    <Link
      className={`
                    ${styles.link}
                    ${localizacao.pathname === to ? styles.linkDestacado : ""}
                `}
      to={to}>
      {children}
    </Link>
  );
}
