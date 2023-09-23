import React from 'react'
import RespostaModel from '../../model/resposta';

import styles from '../styles/Resposta.module.css'

interface RespostaProps {
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

const Resposta = (props: RespostaProps) => {
    const resposta = props.valor;

    return (
        <div className={styles.resposta} onClick={() => props.respostaFornecida(props.indice)}>
            <div className={styles.conteudoResposta}>
                <div className={styles.frente}>
                    <div className={styles.letra} style={{backgroundColor: props.corFundoLetra}}>
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>
                <div className={styles.verso}>

                </div>
            </div>
        </div>
    )
}

export default Resposta;
