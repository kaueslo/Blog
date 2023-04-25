import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export default function Menu(){
    //Usamos o Link, pois é do react-router-dom, pra página não recarregar
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to='/'>
                    Inicio
                </Link>
                <Link className={styles.link} to='/sobremim'>
                    Sobre Mim
                </Link>
            </nav>
        </header>
    )
}