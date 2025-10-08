export interface Case {
    id: string
    title: string
    description: string
    miniIcon: string
    url: string
    image: string
}

export const CASES: Case[] = [
    {
        id: '1',
        title: 'Delta',
        description: 'Redesign Website',
        miniIcon: '/cases/delta/mini_icon.png',
        image: '/cases/delta/case_bw.png',
        url: 'https://dprofile.ru/case/150882/delta-website-redesign',
    },
    {
        id: '2',
        title: 'Delta',
        description: 'Redesign Logotype',
        miniIcon: '/cases/delta/mini_icon.png',
        image: '/cases/delta/cover_logo.png',
        url: 'https://dprofile.ru/case/149732/delta-logotype-redesign',
    },
]
