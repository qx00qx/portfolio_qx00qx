'use client'
import React, { useEffect, useState } from 'react'
import styles from './Preloader.module.scss'
import { useLenis } from 'lenis/react'

const Preloader: React.FC = () => {
    const [hidden, setHidden] = useState(false)
    const [unmounted, setUnmounted] = useState(false)

    const lenis = useLenis()

    useEffect(() => {
        if (lenis) {
            lenis.stop()
        }

        const id = setTimeout(() => {
            setHidden(true)

            if (lenis) {
                lenis.start()
            }
        }, 2000)

        return () => {
            clearTimeout(id)
        }
    }, [lenis])

    if (unmounted) return null

    return (
        <div
            className={`${styles.wrapper} ${hidden ? styles.wrapper_hidden : ''}`}
            onTransitionEnd={() => setUnmounted(true)}
        >
            <img className={styles.logo_pulse} src="/logo.svg" alt="qx00qx" />
        </div>
    )
}

export default Preloader
