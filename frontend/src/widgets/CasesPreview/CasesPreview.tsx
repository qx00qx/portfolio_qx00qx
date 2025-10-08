'use client'
import React from 'react'
import styles from './CasesPreview.module.scss'
import MainSubheading from '@/shared/ui/MainSubheading/MainSubheading'
import CaseItem from '../../shared/ui/CaseItem/CaseItem'
import { CASES } from '@/shared/data/case'
import { useBreakpoint } from '@/shared/lib/useBreakpoints'
import { cn } from '@/shared/lib/classname'

type PreviewCasesProps = {}

const PreviewCases: React.FC<PreviewCasesProps> = (props) => {
    const breakpoint = useBreakpoint()
    return (
        <section className={styles.cases}>
            <div className={styles.container}>
                <MainSubheading text="Кейсы" />
                <div className={cn(styles.cases_group, breakpoint === 'mobile' && styles.cases_group_mobile)}>
                    {CASES.map((item) => (
                        <CaseItem
                            key={item.id}
                            description={item.description}
                            title={item.title}
                            miniIcon={item.miniIcon}
                            image={item.image}
                            link={item.url}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PreviewCases
