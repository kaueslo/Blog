import styles from './Rodape.module.css';
//Importando na sintaxe abaixo, dá pra usar a propriedade como se ela fosse um componente
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg';

export default function Rodape(){
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />

            Desenvolvido por Kaueslo
        </footer>
    )
}