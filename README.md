Video tutorial https://www.youtube.com/watch?v=pQHO-Doct3M

NEXT.js 13 with app/folder (experimental) + Tailwindcss

npx create-next-app@latest --experimental-app

Name?: experiment-app-folder

Transfer Global.css in a new folder, styles (need to create).

SetUp Tailwindcss


npm i @next/font
(import all in the component you need font)
example on Header.jsx:
----------
import { Arvo } from '@next/font/google'
const arvo = Arvo({ subsets: ['latin'], weight: '400' })

const Header = () => {
return (
    <div className='py-5 bg-slate-300'>
        <div className={arvo.className}>
            <Link href="/" >
                <h1 className='text-green-600 font-bold text-lg ml-2'>All-Foods</h1>
            </Link>
        </div>
    </div>
)}
export default Header

------

Thanks to: https://www.themealdb.com/api.php

adding value in next.config for Images
images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "/images/media/meals/**",
      }
    ]
  }
----------