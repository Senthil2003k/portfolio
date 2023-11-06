import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
   subsets: ['latin'] ,
   weight : ["500", "600", "700", "800", "900"]
  })

export const metadata = {
  title: 'portfolio website',
  description: ' create using nextjs , react js , tailwind css'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll'>
      <body className={poppins.className}>
        <Navbar  />
        {children}
        <div>

        <Footer/>
        </div>
        </body>
    </html>
  )
}
