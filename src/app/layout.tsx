import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mircea Serban - Software Developer Portfolio',
  description: 'Professional portfolio of Mircea Serban, BSc Computer Science graduate and software developer based in London, UK.',
  keywords: 'software developer, computer science, portfolio, React, TypeScript, London, UK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}