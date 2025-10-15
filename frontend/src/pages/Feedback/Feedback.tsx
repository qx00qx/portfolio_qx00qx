'use client'

import FormLead from '@/widgets/Form/Form'
import React from 'react'
import styles from './Feedback.module.scss'
import Layout from '@/app/(site)/layouts/Layout'
import { useBreakpoint } from '@/shared/lib/useBreakpoints'
import LinkBack from '@/shared/ui/LinkBack/LinkBack'

const FeedbackPage: React.FC = () => {
    const breakpoint = useBreakpoint()
    return (
        <Layout>
            <div className={styles.feedback}>
                <LinkBack />
                <div className={styles.feedback_container}>
                    <div className={styles.left_container}>
                        <h1>Давайте знакомиться</h1>
                        {breakpoint !== 'tablet' && breakpoint !== 'mobile' && (
                            <div className={styles.pika}>
                                <img src="/pika.svg" alt="" />
                            </div>
                        )}
                    </div>
                    <div className={styles.right_container}>
                        <h2 className={styles.subheading}>
                            Обсудим детали, я задам вопросы и подготовлю для вас оптимальный вариант по срокам и бюджету
                        </h2>
                        <FormLead />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FeedbackPage
