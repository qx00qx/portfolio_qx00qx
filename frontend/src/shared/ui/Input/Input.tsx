import React from 'react'
import styles from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({
    placeholder,
    id,
    autoComplete,
    ...rest
}) => {
    return (
        <div className={styles.container}>
            <input
                id={id}
                className={styles.input}
                placeholder={placeholder}
                autoComplete={autoComplete}
                {...rest}
            />
        </div>
    )
}

export default Input
