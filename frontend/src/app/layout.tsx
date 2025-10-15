import { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.scss'
import ReactLenis from 'lenis/react'

const inter = Inter({
    variable: '--font-intel',
    subsets: ['latin'],
})
const minecraft = localFont({
    src: [
        {
            path: '../../public/fonts/minecraft/MinecraftItalic.otf',
            weight: '400',
            style: 'italic',
        },
    ],
    variable: '--minecraft-italic',
})

export const metadata: Metadata = {
    title: '˖ ⊹𝑞𝑥𝑞𝑥⊹ ˖',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
            <Head>
                <meta name="apple-mobile-web-app-title" content="MyWebSite" />
            </Head>
            <body className={`${inter.className} ${minecraft.variable}`}>
                <ReactLenis root>{children}</ReactLenis>
            </body>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </html>
    )
}
