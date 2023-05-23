import styles from "./SobreMim.module.css";

import PostModelo from "Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Kauê!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Kauê"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Olá, tudo bem?? Me chamo Kauê, sou dev dês de 2019 e fico feliz que venha visitar a página.
            </p>
            <p className={styles.paragrafo}>
                Comecei a estudar programação no meu curso técnico no Senac, onde tive o contato com o C#,
                com as aplicações Windows Form, onde me identifiquei e gostei muito, me fazendo ficar
                curioso pela área. 
            </p>
            <p className={styles.paragrafo}>
                Logo depois, resolvi consegui um estágio de suporte, porém sempre ficava com a área de 
                desenvolvimento na cabeça, foi então que em 2019, resolvi investir em alguns cursos e 
                em uma faculdade.
            </p>
            <p className={styles.paragrafo}>
                Após isso, no mesmo ano, consegui o meu primeiro estágio, onde fiquei por cerca de 11 meses,
                trabalhando com o .net, aprofundando cada vez mais o meu conhecimento.
            </p>
            <p className={styles.paragrafo}>
                Hoje trabalho como desenvolvedor back end de .net core, onde continuo
                estudando e aprofundando os meus conhecimentos na linguagem.
            </p>
            
            <p className={styles.paragrafo}>
                E resolvi estudar React, para ver como funciona uma biblioteca javascript,
                já tinha um conhecimento de trabalhos anteriores, e basicamente é isso.
            </p>
        </PostModelo>
    )
}