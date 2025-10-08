import React from 'react'
import styles from './WorkingConditions.module.scss'
import { cn } from '@/shared/lib/classname'
import MainSubheading from '@/shared/ui/MainSubheading/MainSubheading'

const WorkingConditions: React.FC = () => {
    return (
        <section className={styles.conditions}>
            <div className={styles.container}>
                <MainSubheading text="УСЛОВИЯ РАБОТЫ СО МНОЙ" />
                <div className={styles.text_block}>
                    <h3 className={styles.h3}>время работы</h3>
                    <p>работаю и отвечаю на сообщения по будням с 10:00 до 21:00 (по МСК)</p>
                    <p>подбираю удобное время общения с учетом вашего часового пояса</p>
                </div>
                <div className={styles.text_block}>
                    <h3 className={styles.h3}>договор и оплата</h3>
                    <p>являюсь самозанятой и работаю по договору + по запросу предоставляю чеки</p>
                </div>

                <div className={styles.payment_steps}>
                    <div className={styles.step}>
                        <span>Предоплата перед началом работы</span>
                        <p>50%</p>
                    </div>
                    <div className={cn(styles.step, styles.step_grey)}>
                        <span>После утверждения дизайна</span>
                        <p>25%</p>
                    </div>
                    <div className={cn(styles.step, styles.step_pink)}>
                        <span>После завершения и сдачи работы</span>
                        <p>25%</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkingConditions
