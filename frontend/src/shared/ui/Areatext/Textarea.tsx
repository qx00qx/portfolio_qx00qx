import React from 'react'
import styles from './Textarea.module.scss'

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: React.FC<TextareaProps> = ({ placeholder, id, ...rest }) => {
    return (
        <div className={styles.container}>
            <textarea
                className={styles.textarea}
                id={id}
                placeholder={placeholder}
                {...rest}
            />
        </div>
    )
}

export default Textarea
