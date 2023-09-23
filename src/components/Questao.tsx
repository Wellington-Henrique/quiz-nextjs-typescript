import React from 'react'
import QuestaoModel from '../../model/questao';

import styles from '../styles/Questao.module.css'
import Enunciado from './Enunciado';
import Resposta from './Resposta';

const letras = [
    {valor: "A", cor: "#F2C866"},
    {valor: "B", cor: "#F266BA"},
    {valor: "C", cor: "#85D4F2"},
    {valor: "F", cor: "#BCE596"}
]

interface QuestaoProps {
    questao: QuestaoModel
}

const Questao = ({questao}: QuestaoProps) => {

    function renderRespostas () {
        return questao.respostas.map((resposta, i)=> 
            <Resposta
                key={i}
                valor={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
            />
        )
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado}/>
            {renderRespostas()}
        </div>
    )
}

export default Questao;