'use client'

import { useEffect, useRef, useState } from 'react'

export const usePosition = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    })

    useEffect(() => {
        const updatePosition = () => {
            const rect = ref.current?.getBoundingClientRect()
            if (rect) {
                setPosition({
                    top: rect.top + window.scrollY,
                    left: rect.left + window.scrollX,
                    right: rect.right + window.scrollX,
                    bottom: rect.bottom + window.scrollY,
                })
            }
        }

        updatePosition()
        window.addEventListener('scroll', updatePosition)
        window.addEventListener('resize', updatePosition)

        return () => {
            window.removeEventListener('scroll', updatePosition)
            window.removeEventListener('resize', updatePosition)
        }
    }, [])

    return { ref, position }
}
