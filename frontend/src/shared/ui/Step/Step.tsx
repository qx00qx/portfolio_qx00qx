import React from 'react'
import styles from './Step.module.scss'

interface StepProps {
    number?: string
    text?: string
    caption?: string
}

const Step: React.FC<StepProps> = ({ number, text, caption }) => {
    return (
        <div className={styles.step}>
            <div className={styles.top}>
                <p className={styles.number}>{number}</p>
                <span className={styles.text}>{text}</span>
            </div>
            <div className={styles.caption}>
                <span>{caption}</span>
            </div>
        </div>
    )
}

export default Step
