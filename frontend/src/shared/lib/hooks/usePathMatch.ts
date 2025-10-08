'use client'

import { usePathname } from 'next/navigation'

export const usePathMatch = (path: string) => {
    const pathname = usePathname()
    if (path) {
        const pathMatch = pathname !== path
        return pathMatch
    } else {
        return
    }
}
