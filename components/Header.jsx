'use client'

import React from 'react'
import Link from 'next/link'
import { Arvo } from '@next/font/google'
import { usePathname } from 'next/navigation'

const arvo = Arvo({ subsets: ['latin'], weight: '400' })

const Header = () => {
    const pathname = usePathname().split("/")
    const currentArea = pathname[2]
    const recipeID = pathname[3]
    //console.log(pathname)
return (
    <div className='flex place-content-around py-5 bg-gradient-to-r from-sky-500 to-indigo-500 border border-cyan-700 '>
        <div className={arvo.className}>
            <Link href="/" >
                <h1 className='text-yellow-400 font-bold text-lg ml-2 drop-shadow-xl'>All-Foods <span>🏠</span></h1>
            </Link>
        </div>

    {pathname && currentArea && (
        <div className=''>
        <Link className="bg-blue-700 text-yellow-300 p-2 text-xs sm:text-lg rounded-lg"
            href={recipeID ? `/types/${currentArea}` : "/types"}
        >
            Prev. page 
        </Link>
        </div>
    )}
    </div>
)
}

export default Header