import React from 'react'

import QuestaoModel from '../../model/questao';

import Questao from './Questao';
import Botao from './Botao';

import styles from '../styles/Questionario.module.css'

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irPraProximoPasso: () => void
}

export const Questionario = (props: QuestionarioProps) => {
  
    function respostaFornecida(indice: number) {
        if (props.questao.naoRespondida)
            props.questaoRespondida(props.questao.responderCom(indice))
    }

    return (
        <div className={styles.questionario}>
            
            {props.questao &&
            <>
                <Questao
                    questao={props.questao}
                    tempoPraResposta={6}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irPraProximoPasso}
                />
                <Botao 
                    texto={props.ultima ? "Finalizar" : "Próxima"}
                    href={props.ultima && '/resultado'}
                    onClick={props.irPraProximoPasso}
                />
            </>} 
        </div>
    )
}

export default Questionario;