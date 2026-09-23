'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLinks = () => {
    const pathname = usePathname()

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Apps', href: '/apps' },
        { name: 'Installation', href: '/installation' },
    ]
  return (
    <>
        {
            navLinks?.map((link)=>{
                const isActive = pathname === link.href
                return (
                    <li key={link.name} className="text-gray-600 font-bold">
                        <Link href={link.href} className={isActive ? "text-gradient border-b-2 border-brand-secondary pb-1" : ''}>
                            {link.name}
                        </Link>
                    </li>
                )
            })
        }
    </>
  )
}

export default NavLinks