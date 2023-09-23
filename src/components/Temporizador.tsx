import React from 'react'

import styles from '../styles/Temporizador.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

interface TemporizadorProps {
    duracao: number;
    tempoEsgotado: () => void
}

const Temporizador = (props: TemporizadorProps) => {
  return (
    <div className={styles.temporizador}>
        <CountdownCircleTimer
            size={120}
            isPlaying
            duration={props.duracao}
            onComplete={props.tempoEsgotado}
            colors={["#BCE596", "#F7B801", "#ED827A"]}
            colorsTime={[10, 5, 0]}
        >{({remainingTime}) => remainingTime}</CountdownCircleTimer>
    </div>
  )
}
export default Temporizador;
