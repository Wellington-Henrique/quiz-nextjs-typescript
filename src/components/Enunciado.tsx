import React from 'react'

import styles from '../styles/Enunciado.module.css'

interface EnunciadoProps {
    texto: string
}

const Enunciado = ({texto}: EnunciadoProps) => {
  return (
    <div className={styles.texto}>
        <div className={styles.texto}>{texto}</div>
    </div>
  )
}

export default Enunciado;