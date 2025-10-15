'use client'

import React from 'react'
import styles from './NavigationBar.module.scss'
import Link from 'next/link'
import SquareImage from '@/shared/ui/SquareImage/SquareImage'
import CustomLink from '@/shared/ui/Link/CustomLink'
import { useFooterVisibility } from '@/shared/lib/hooks/useFooterVisibility'
import { cn } from '@/shared/lib/classname'
import { useBreakpoint } from '@/shared/lib/useBreakpoints'
import MobileMenu from '@/shared/ui/MobileMenu/MobileMenu'

const NavigationBar = () => {
    const isFooterVisible = useFooterVisibility()
    const breakpoint = useBreakpoint()
    return (
        <nav className={cn(styles.navbar_component, isFooterVisible ? styles.hidden : '')}>
            <div className={styles.navbar_container}>
                <div className={styles.navbar_body}>
                    <Link href={'/'}>
                        <SquareImage size={46} url="/avat.png" />
                    </Link>
                    {breakpoint === 'mobile' && <MobileMenu />}
                    {(breakpoint === 'desktop' || breakpoint === 'tablet') && (
                        <div className={styles.navbar_link_list}>
                            <CustomLink text="Кейсы" href={'/cases'} />
                            <CustomLink text="Заполнить форму" href={'/feedback'} />
                        </div>
                    )}
                    {(breakpoint === 'desktop' || breakpoint === 'tablet') && (
                        <Link className={styles.telegram} href={'https://t.me/qx00qxw'}>
                            <svg
                                width="26"
                                height="21"
                                viewBox="0 0 26 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.597 9.64765L17.0817 3.41229C18.6108 2.76291 23.793 0.68553 23.793 0.68553C23.793 0.68553 26.1866 -0.223927 25.9883 1.98429C25.9217 2.89537 25.3887 6.07443 24.8573 9.51519L23.1966 19.7082C23.1966 19.7082 23.0633 21.2024 21.9339 21.4625C20.8029 21.7226 18.9423 20.5531 18.6108 20.2946C18.3443 20.0991 13.6253 17.1785 11.8963 15.7473C11.4332 15.3596 10.9018 14.581 11.9629 13.6716C14.3322 11.5506 16.6576 9.38596 18.9423 7.17935C19.7418 6.39751 20.5364 4.58182 17.2149 6.78843L7.84027 12.9576C7.84027 12.9576 6.77914 13.6069 4.78364 13.0222C2.79138 12.4374 0.462749 11.6588 0.462749 11.6588C0.462749 11.6588 -1.12976 10.6847 1.59375 9.64442L1.597 9.64765Z"
                                    fill="#FAFAFA"
                                />
                            </svg>
                        </Link>
                    )}
                </div>
                <div className={styles.navbar_background}></div>
            </div>
        </nav>
    )
}

export default NavigationBar
