'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import styles from './LinkBack.module.scss'

interface LinkBackProps {
    fallbackUrl?: string
    is404?: boolean
}

const LinkBack: React.FC<LinkBackProps> = ({ fallbackUrl = '/', is404 = false }) => {
    const router = useRouter()

    const handleBack = () => {
        if (is404) {
            router.push(fallbackUrl)
        } else {
            router.back()
        }
    }

    return (
        <button onClick={handleBack} className={styles.link_back}>
            назад
        </button>
    )
}

export default LinkBack
