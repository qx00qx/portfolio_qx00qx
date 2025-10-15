'use client'

import { useState, useEffect } from 'react'
import styles from './randomKaomoji.module.scss'

export type EmojiTypes = 'forError404' | 'forHomePage'

interface RandomKaomojiProps {
    type: EmojiTypes
}

const kaomojisByType: Record<EmojiTypes, string[]> = {
    forError404: ['o(>< )o', '┐(シ)┌', '𐔌՞. .՞𐦯', '|･ω･)'],
    forHomePage: ['o(>ω<)o', '(･ω<)☆', '☆(>ᴗ•)'],
}

export const RandomKaomoji = ({ type }: RandomKaomojiProps) => {
    const [kaomoji, setKaomoji] = useState('')

    useEffect(() => {
        const kaomojis = kaomojisByType[type] || ['¯\\_(ツ)_/¯']
        const randomIndex = Math.floor(Math.random() * kaomojis.length)
        setKaomoji(kaomojis[randomIndex])
    }, [type])

    return <span className={styles.kaomoji}>{kaomoji}</span>
}
