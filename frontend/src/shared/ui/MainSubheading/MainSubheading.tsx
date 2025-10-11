'use client'
import React from 'react'
import SplitText from '@/shared/ui/SplitText/SplitText'
import styles from './MainSubheading.module.scss'

interface MainSubheadingProps {
    text: string
}

const MainSubheading: React.FC<MainSubheadingProps> = ({ text }) => {
    return (
        <SplitText
            text={text}
            className={styles.subheading}
            delay={50}
            duration={0.3}
            ease="power3.out"
            scrollStart="top 90%"
            scrollEnd="bottom 10%"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
        />
    )
}

export default MainSubheading
