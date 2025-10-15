'use client'

import React from 'react'
import styles from './Footer.module.scss'
import ButtonToUp from '@/shared/ui/ButtonToUp/ButtonToUp'
import { usePathMatch } from '@/shared/lib/hooks/usePathMatch'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const feedbackPatch = usePathMatch('/feedback')
    const casesPatch = usePathMatch('/cases')
    const shoulShowButton = feedbackPatch && casesPatch

    const pathname = usePathname()
    const is404Page = pathname === '/404'

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {(shoulShowButton || is404Page) && <ButtonToUp />}
                <img className={styles.img_qxqx} src="/qxqx.svg" alt="qxqx" />
            </div>
        </footer>
    )
}

export default Footer
