'use client'
import React from 'react'
import styles from './WhatCanIHelpYou.module.scss'
import ListItem from '@/shared/ui/ListItem/ListItem'
import MainSubheading from '@/shared/ui/MainSubheading/MainSubheading'

const WhatCanIHelpYou: React.FC = () => {
    return (
        <section className={styles.what_can_help}>
            <MainSubheading text="Чем я могу помочь вам" />
            <ul>
                <ListItem text="Веб-дизайн" number="01" />
                <ListItem text="Дизайн приложений" number="02" />
                <ListItem text="Дизайн логотипа" number="03" />
                <ListItem text="Брендбук & Гайдлайн" number="04" />
                <ListItem text="Айдентика" number="05" />
                <ListItem text="Иконки" number="06" />
            </ul>
        </section>
    )
}

export default WhatCanIHelpYou
