'use client'
import { useEffect, useState } from 'react'

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

    useEffect(() => {
        const updateBreakpoint = () => {
            const width = window.innerWidth
            if (width <= 430) {
                setBreakpoint('mobile')
            } else if (width <= 768) {
                setBreakpoint('tablet')
            } else {
                setBreakpoint('desktop')
            }
        }

        updateBreakpoint()
        window.addEventListener('resize', updateBreakpoint)
        return () => window.removeEventListener('resize', updateBreakpoint)
    }, [])

    return breakpoint
}
