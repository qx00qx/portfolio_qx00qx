'use client'

import React from 'react'
import Button from '@/shared/ui/Button/Button'
import Input from '@/shared/ui/Input/Input'
import { sendLead } from '@/features/lead/sendLead'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import Textarea from '@/shared/ui/Areatext/Textarea'
import styles from './Form.module.scss'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'

export interface FormLeadData {
    name: string
    contact: string
    message: string
    budget: string | null
}

const FormLead: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormLeadData>()

    const validatePhoneOrTG = (value: string) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/
        if (value.startsWith('@') || value.match(phoneRegex)) {
            return true
        }
        return false
    }

    const submit: SubmitHandler<FormLeadData> = async (data) => {
        try {
            await sendLead(data)
            reset()
        } catch (error) {
            console.error(`Ошибка лида ${error}`)
        }
    }
    const error: SubmitErrorHandler<FormLeadData> = () => {}

    return (
        <form onSubmit={handleSubmit(submit, error)}>
            <div className={styles.input_group}>
                <div className={styles.input_container}>
                    <Input
                        id="name"
                        type="text"
                        max={30}
                        placeholder="Как вас зовут?"
                        {...register('name', {
                            required: true,
                        })}
                        aria-invalid={errors.name ? true : false}
                    />
                </div>
                <div className={styles.input_container}>
                    <Input
                        id="contact"
                        type="text"
                        placeholder="Телефон или телеграмм (через @)"
                        {...register('contact', {
                            required: true,
                            validate: validatePhoneOrTG,
                        })}
                        aria-invalid={errors.contact ? true : false}
                    />
                </div>
                <div className={styles.input_container}>
                    <Textarea id="message" placeholder="Кратко опишите вашу задачу" {...register('message')} />
                </div>
            </div>
            <div className={styles.budget_checkboxes}>
                <span className={styles.tip}>*выберите примерный бюджет проекта</span>
                <div className={styles.checkbox_group}>
                    <Checkbox text="до 50 тыс." value="до 50 тыс." {...register('budget')} />
                    <Checkbox text="100 тыс." value="100 тыс." {...register('budget')} />
                    <Checkbox text="> 200 тыс." value="> 200 тыс." {...register('budget')} />
                </div>
            </div>
            <Button className={styles.button_arrow} type="submit" text="Оставить заявку" ArrowAction />
        </form>
    )
}

export default FormLead
