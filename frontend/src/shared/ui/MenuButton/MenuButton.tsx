import React, { useState } from 'react'
import styles from './MenuButton.module.scss'
import { cn } from '@/shared/lib/classname'

interface MenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    close?: boolean
}

const MenuButton: React.FC<MenuButtonProps> = ({ children, close = false, ...props }) => {
    const [isClose, setIsClose] = useState<boolean>(close)
    return (
        <button className={cn(styles.menu_button, isClose && styles.close_button)} {...props}>
            {children}
        </button>
    )
}

export default MenuButton
