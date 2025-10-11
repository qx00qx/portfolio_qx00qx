import React from 'react'
import styles from './Input.module.scss'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ placeholder, id, autoComplete, ...rest }) => {
    return (
        <div className={styles.container}>
            <input id={id} className={styles.input} placeholder={placeholder} autoComplete={autoComplete} {...rest} />
        </div>
    )
}

export default Input
