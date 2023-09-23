import React from 'react'
import QuestaoModel from '../../model/questao';

import styles from '../styles/Questao.module.css'
import Enunciado from './Enunciado';
import Resposta from './Resposta';
import Temporizador from './Temporizador';

const letras = [
    {valor: "A", cor: "#F2C866"},
    {valor: "B", cor: "#F266BA"},
    {valor: "C", cor: "#85D4F2"},
    {valor: "F", cor: "#BCE596"}
]

interface QuestaoProps {
    questao: QuestaoModel
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

const Questao = (props: QuestaoProps) => {
    function renderRespostas () {
        return props.questao.respostas.map((resposta, i)=> 
            <Resposta
                key={i}
                valor={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
            />
        )
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={props.questao.enunciado}/>
            <Temporizador
                duracao={10}
                tempoEsgotado={props.tempoEsgotado}
            />
            {renderRespostas()}
        </div>
    )
}

export default Questao;