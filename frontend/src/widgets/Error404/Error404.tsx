import React from 'react'
import styles from './Error404.module.scss'
import { randomKaomoji } from '@/shared/lib/randomKaomoji'

const Error404: React.FC = () => {
    return (
        <div className={styles.error}>
            <span>{randomKaomoji('forError404')}</span>
            <p>Такой страницы нет</p>
        </div>
    )
}

export default Error404
