import React from 'react'
import styles from './Checkbox.module.scss'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    text: string
}

const Checkbox: React.FC<CheckboxProps> = ({ text, ...props }) => {
    return (
        <label className={styles.checkbox}>
            <input className={styles.checkbox_input} type="radio" {...props} />

            <div className={styles.checkbox_new} aria-hidden="true">
                <div className={styles.checkbox_new_checked}>{text}</div>
                <div className={styles.checkbox_new_unchecked}>{text}</div>
            </div>
        </label>
    )
}

export default Checkbox
