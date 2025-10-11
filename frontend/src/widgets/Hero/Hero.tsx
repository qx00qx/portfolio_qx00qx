'use client'

import React from 'react'
import styles from './Hero.module.scss'
import { usePosition } from '@/shared/lib/hooks/usePosition'
import { useBreakpoint } from '@/shared/lib/useBreakpoints'

const Hero: React.FC = () => {
    const { position, ref } = usePosition()
    const breakpoint = useBreakpoint()

    const getKittyOffset = () => {
        switch (breakpoint) {
            case 'mobile':
                return { top: 350, left: 40 }
            case 'tablet':
                return { top: 390, left: 50 }
            case 'desktop':
                return { top: 350, left: 150 }
            default:
                return { top: 350, left: 150 }
        }
    }

    const offset = getKittyOffset()

    return (
        <div className={styles.hero}>
            <img className={styles.cross} src={'/refs/cros.svg'} alt="крест" />
            <img className={styles.cross_right} src={'/refs/cros.svg'} alt="крест" />
            <div ref={ref} className={styles.qxqx_portfolio}>
                <img className={styles.qxqx} src={'/refs/text.svg'} alt="qx00qx portfolio" />
            </div>
            <div
                style={
                    {
                        top: `${position.top + offset.top}px`,
                        left: `${position.left - offset.left}px`,
                    } as React.CSSProperties
                }
                className={styles.kitty}
            >
                <img src={'/refs/kitty.svg'} alt="kitty" />
            </div>
        </div>
    )
}
export default Hero
