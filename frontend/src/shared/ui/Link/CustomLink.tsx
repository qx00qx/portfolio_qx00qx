import React from 'react'
import styles from './CustomLink.module.scss'
import Link, { LinkProps } from 'next/link'
import { cn } from '@/shared/lib/classname'

interface CustomLinkProps extends LinkProps {
    text?: string
    className?: string
    children?: React.ReactNode
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, text, className, children }) => {
    return (
        <Link className={cn(styles.custom_link, className)} href={href}>
            {text}
            {children}
        </Link>
    )
}

export default CustomLink
