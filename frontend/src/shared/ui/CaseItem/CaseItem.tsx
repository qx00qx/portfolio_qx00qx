import React from 'react'
import styles from './CaseItem.module.scss'
import Link from 'next/link'

interface CaseItemProps {
    title: string
    miniIcon: string
    image: string
    link: string
    description: string
    descriptionText?: string
}

const CaseItem: React.FC<CaseItemProps> = ({ title, miniIcon, image, link, description, descriptionText }) => {
    return (
        <div className={styles.case_item}>
            <div className={styles.content}>
                <Link href={link}>
                    <img src={miniIcon} alt={title} width={40} height={40} className={styles.mini_icon} />
                    <h3 className={styles.title}>
                        {title} | {description}
                    </h3>
                    <div className={styles.img_container}>
                        <img src={image} alt={title} width={100} height={100} className={styles.image} />
                    </div>
                    <p>{descriptionText}</p>
                </Link>
            </div>
        </div>
    )
}

export default CaseItem
