import React from 'react'
import styles from './Error404.module.scss'
import { RandomKaomoji } from '@/shared/ui/randomKaomoji/randomKaomoji'
import CustomLink from '@/shared/ui/Link/CustomLink'

const Error404: React.FC = () => {
    return (
        <div className={styles.error}>
            <RandomKaomoji type="forError404" />
            <p>Такой страницы нет</p>
            <CustomLink text="назад" href={'/'} />
        </div>
    )
}

export default Error404
