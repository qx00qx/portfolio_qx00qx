import { useLenis } from 'lenis/react'
import React, { useEffect, useRef, useState } from 'react'
import styles from './MobileMenu.module.scss'
import MenuButton from '../MenuButton/MenuButton'
import CustomLink from '../Link/CustomLink'
import gsap from 'gsap'
import ShinyText from '../ShinyText/ShinyText'

const MobileMenu: React.FC = () => {
    const [open, setOpen] = useState(false)
    const lenis = useLenis()
    const linksRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
            lenis?.stop()

            gsap.fromTo(
                linksRef.current,
                {
                    opacity: 0,
                    y: 16,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    stagger: 0.2,
                    ease: 'power2.out',
                }
            )
        } else {
            document.body.style.overflow = ''
            lenis?.start()
        }

        return () => {
            document.body.style.overflow = ''
            lenis?.start()
        }
    }, [open, lenis])

    return (
        <>
            <div className={`${styles.mobile_menu} ${open ? styles.open : ''}`}>
                <img className={styles.logo} src="/logo.svg" alt="qxqx" />
                <div className={styles.link_group}>
                    <div
                        ref={(el) => {
                            if (el) linksRef.current[0] = el
                        }}
                    >
                        <CustomLink text="Кейсы" href={'/cases'} />
                    </div>
                    <div
                        ref={(el) => {
                            if (el) linksRef.current[1] = el
                        }}
                    >
                        <CustomLink className={styles.action_link} href={'/feedback'}>
                            <ShinyText disabled={false} speed={3} text="Заполнить форму" />
                        </CustomLink>
                    </div>
                </div>
                <MenuButton close onClick={() => setOpen(false)}>
                    <img src={'/close_blue.svg'} alt="закрыть" />
                </MenuButton>
            </div>
            <MenuButton onClick={() => setOpen(true)}>
                <img src={'/Menu_Button_Blue.svg'} alt="открыть меню" />
            </MenuButton>
        </>
    )
}

export default MobileMenu
