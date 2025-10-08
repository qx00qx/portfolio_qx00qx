import React from 'react'
import styles from './ListItem.module.scss'

interface ListItemProps {
    text: string
    number: string
}

const ListItem: React.FC<ListItemProps> = ({ text, number }) => {
    return (
        <li className={styles.list_item}>
            <h3 className={styles.text}>{text}</h3>
            <p className={styles.number}>{number}</p>
        </li>
    )
}

export default ListItem
