import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Shop',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-300 text-slate-800 container mx-auto`}>
        {<NavBar/>}
        {children}</body>
    </html>
  )
}
