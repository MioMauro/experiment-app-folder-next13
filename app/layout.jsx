import styles from '../styles/globals.css'
import Header from '@/components/Header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <head />
      <body className='bg-gradient-to-r from-cyan-500 to-blue-500'>
      <Header/>
      {children}
      </body>
    </html>
  )
}

{/*
<head /> conterrà i componenti restituiti dal genitore più vicino
*/}