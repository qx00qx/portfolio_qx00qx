'use client'

import React from 'react'
import styles from './Footer.module.scss'
import ButtonToUp from '@/shared/ui/ButtonToUp/ButtonToUp'
import { usePathMatch } from '@/shared/lib/hooks/usePathMatch'

const Footer = () => {
    const shoulShowButton = usePathMatch('/feedback')
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {shoulShowButton && <ButtonToUp />}
                <img className={styles.img_qxqx} src="/qxqx.svg" alt="qxqx" />
            </div>
        </footer>
    )
}

export default Footer
