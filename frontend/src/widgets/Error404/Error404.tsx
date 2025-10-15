import React from 'react'
import styles from './Error404.module.scss'
import { RandomKaomoji } from '@/shared/ui/randomKaomoji/randomKaomoji'
import LinkBack from '@/shared/ui/LinkBack/LinkBack'

const Error404: React.FC = () => {
    return (
        <div className={styles.error}>
            <RandomKaomoji type="forError404" />
            <p>Такой страницы нет</p>
            <LinkBack is404={true} fallbackUrl="/" />
        </div>
    )
}

export default Error404
