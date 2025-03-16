"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '../shadcn-ui/button'
const HomeNavbar = () => {
  const { setTheme } = useTheme()
  setTheme("light")
  return (
    <div className={`fixed px-16 py-6 w-full text-black flex justify-between items-center  bg-white z-[700]`}>
      <div className='flex gap-4 items-center'>
        <Image
          src='/logo.png'
          alt="Logo"
          height={50}
          width={49}
          className=''
        />
        <p className="text-2xl font-semibold">
          Finovate.
        </p>
      </div>


      <div className="flex items-center space-x-8 font-semibold">
        <div>Home</div>
        <div>Pricing</div>
        <div>About Us</div>
        <Link
          href="/dashboard"
        >
          <Button
            className="px-5 rounded-sm h-9">
            Sign in
          </Button>
        </Link>
      </div>
    </div >
  )
}

export default HomeNavbar