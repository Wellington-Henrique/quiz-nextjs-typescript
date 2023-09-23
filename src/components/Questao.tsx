import React from 'react'
import QuestaoModel from '../../model/questao';

import styles from '../styles/Questao.module.css'

interface QuestaoProps {
    questao: QuestaoModel
}

export const Questao = ({questao}: QuestaoProps) => {
    return (
    <div className={styles.questao}>
        <h1>Questão</h1>
    </div>
  )
}

export default Questao;