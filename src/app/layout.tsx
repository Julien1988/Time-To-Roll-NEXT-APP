import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header'
import Footer from "@/app/components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Time To Roll',
  description: "Communauté de roliste et créateurs d'AP",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className +  ' bg-sky-500'} >
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
