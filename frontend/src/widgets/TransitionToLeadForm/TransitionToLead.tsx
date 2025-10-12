import React from 'react'
import styles from './TransitionToLead.module.scss'
import InteractiveGrid from '../InteractiveGrid/InteractiveGrid'
import Button from '@/shared/ui/Button/Button'
import Link from 'next/link'
import { RandomKaomoji } from '@/shared/ui/randomKaomoji/randomKaomoji'

const TransitionToLead: React.FC = () => {
    return (
        <section className={styles.transition}>
            <div className={styles.block}>
                <div className={styles.text_and_btn}>
                    <RandomKaomoji type="forHomePage" />
                    <p className={styles.text}>Расскажите о вашем проекте</p>
                    <Link href="/feedback">
                        <Button className={styles.button_arrow} text="Заполнить форму" ArrowAction />
                    </Link>
                </div>
            </div>
            <InteractiveGrid />
        </section>
    )
}

export default TransitionToLead
