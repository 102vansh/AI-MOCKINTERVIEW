"use client"

import { UserButton } from
'@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const Header = () => {
    const path = usePathname()
    // useEffect(() => {
    //     console.log(path)
    // }, [])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary'>
        <img src={'logo.svg'} width={200} height={100} />
        <ul className=' md: flex gap-6 '>
            <li className={`hover:text-blue-500 hover:font-bold transition-all cursor-pointer ${path === '/dashboard' ? 'text-primary font-bold' : ''}`}>Dashboard</li>
            <li className={`hover:text-blue-500 hover:font-bold transition-all cursor-pointer ${path === '/dashboard/questions' ? 'text-primary font-bold' : ''}`}>Questions</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' ? 'text-primary font-bold' : ''}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/how' ? 'text-primary font-bold' : ''}`}>How it Works</li>
        </ul>
        <UserButton />
    </div>
  )
}

export default Header