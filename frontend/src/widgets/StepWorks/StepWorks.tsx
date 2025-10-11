'use client'
import React from 'react'
import styles from './StepWorks.module.scss'
import MainSubheading from '@/shared/ui/MainSubheading/MainSubheading'
import Step from '@/shared/ui/Step/Step'

const StepWorks: React.FC = () => {
    return (
        <section className={styles.step_work}>
            <div className={styles.container}>
                <MainSubheading text="Этапы работы" />
                <div className={styles.group}>
                    <Step
                        number={'(01)'}
                        text="Знакомство"
                        caption="Созваниваемся или переписываемся — обсуждаем ваши цели и желаемый результат"
                    />
                    <Step
                        number={'(02)'}
                        text="Заполнение брифа"
                        caption="Вы заполняете короткий опрос — он помогает мне подробнее разобраться в бренде и в вашем запросе"
                    />
                    <Step
                        number={'(03)'}
                        text="Предоплата"
                        caption="Обсуждаем детали лично и вносим предоплату для старта работы"
                    />
                    <Step
                        number={'(04)'}
                        text="Разработка и утверждение"
                        caption="Я готовлю несколько вариантов, мы вместе выбираем и дорабатываем их до идеального результата. После утверждения концепции вносится 25% оплаты"
                    />
                    <Step
                        number={'(05)'}
                        text="Финал"
                        caption="После внесения финальной оплаты я передаю готовые материалы в удобном для вас формате"
                    />
                </div>
            </div>
        </section>
    )
}

export default StepWorks
