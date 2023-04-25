import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Olá, bem vindo! Me chamo Kauê, sou desenvolvendor dês de 2019, atualmente estou estudando react, então, espero que gostem desse projeto de estudo :D
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido} 
                    aria-hidden={true}
                    alt="Circulo Colorido" 
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Minha Foto" 
                />
            </div>
        </div>
    )
}