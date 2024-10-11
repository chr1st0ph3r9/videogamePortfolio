import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Christopher Hayling - Game Developer Portfolio',
  description: 'Portfolio of Christopher Hayling, a 25-year-old videogame developer experienced in Unity and Unreal Engine.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}