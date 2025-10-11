import React from 'react'
import styles from './Button.module.scss'
import { cn } from '@/shared/lib/classname'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    ArrowAction?: boolean
    className?: string
}

const Button: React.FC<ButtonProps> = ({ text, type, className, ArrowAction, ...props }) => {
    return (
        <button type={type} className={cn(styles.button, ArrowAction && styles.button_arrow, className)} {...props}>
            <span>{text}</span>
            {ArrowAction && <img className={styles.arrow} src={'/arrow.svg'} alt={text} />}
        </button>
    )
}

export default Button
