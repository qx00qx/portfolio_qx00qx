'use client'

import React, { ReactNode } from 'react'
import styles from './Layout.module.scss'
import Footer from '@/widgets/Footer'
import { ReactLenis } from 'lenis/react'
import NavigationBar from '@/widgets/NavigationBar/NavigationBar'
import { usePathMatch } from '@/shared/lib/hooks/usePathMatch'

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const shouldShowNavbar = usePathMatch('/feedback')
    return (
        <>
            <div className={styles.layout}>
                {shouldShowNavbar && <NavigationBar />}
                <main className={styles.main}>{children}</main>
            </div>
        </>
    )
}

export default Layout
