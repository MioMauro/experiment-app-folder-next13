import React from 'react'
import { Arvo } from '@next/font/google'
import { Lobster } from '@next/font/google'
import Link from 'next/link'

const arvo = Arvo({ subsets: ['latin'], weight: '400' })
const lobster = Lobster({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return <div className='h-screen w-full bg-gradient-to-r from-purple-500 to-pink-500'>
      <div className='text-center underline text-white'>      
      <h1 className={arvo.className}>Homepage - page.jsx in app folder</h1>
      </div>

      <div className='text-xl mt-4 text-center underline text-white'>
      <h2 >Next.js.13 app/folder</h2>
      </div>

      <div className='shadow-md shadow-blue-600 p-2 absolute top-1/2 left-1/2 bg-slate-500 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded hover:bg-white'>
        <Link href="../types" className=''>
        <h2 className={arvo.className}>Are you hungry?</h2>
        </Link>
      </div>
      
  </div>
    
  
}
