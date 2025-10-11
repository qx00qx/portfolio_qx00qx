import React from 'react'
import styles from './Textarea.module.scss'

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ placeholder, id, ...rest }) => {
    return (
        <div className={styles.container}>
            <textarea className={styles.textarea} id={id} placeholder={placeholder} {...rest} />
        </div>
    )
}

export default Textarea
