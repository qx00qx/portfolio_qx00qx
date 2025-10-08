'use client'

import React from 'react'
import styles from './ButtonToUp.module.scss'
import { useLenis } from 'lenis/react'

const ButtonToUp: React.FC = () => {
    const lenis = useLenis()

    const onClick = () => {
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.0 })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
    return (
        <button className={styles.button} onClick={onClick}>
            <img src="/arrow_up.svg" alt="В начало страницы" />
        </button>
    )
}

export default ButtonToUp
