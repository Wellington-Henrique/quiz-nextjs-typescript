import React from 'react'
import QuestaoModel from '../../model/questao';

import styles from '../styles/Questao.module.css'
import Enunciado from './Enunciado';
import Resposta from './Resposta';

interface QuestaoProps {
    questao: QuestaoModel
}

const Questao = ({questao}: QuestaoProps) => {

    function renderRespostas () {
        return questao.respostas.map((resposta, i)=> 
            <Resposta 
                valor={resposta}
                indice={i}
                letra="A"
                corLetra='#F2C866'
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