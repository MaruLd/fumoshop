import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function NavBar() {
    return (
        <div className='flex min-w-full flex-row items-center justify-between text-base text-slate-900 border-b-2 border-slate-800'>
            <Image
                src="https://cdn.lazyshop.com/files/ff33716b-be66-431a-9a5d-aba48a70cbcc/other/f089d57bc4c08eaa9ac082417720806d.png"
                alt="Fumo Logo"
                className="p-4"
                width={200}
                height={40}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
            />
            <ul className='flex flex-row items-center gap-2 mt-10 mr-24'>
                <li className='p-2'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-2'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='p-2'>
                    <Link href='/contact'>Contact</Link>
                </li>
                <li className='p-2'>
                    <Link href='/login'>Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar