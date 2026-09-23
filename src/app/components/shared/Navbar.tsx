import logo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import NavLinks from './NavLinks';

const Navbar = () => {


  return (
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
            <Image
                src={logo}
                alt="HERO.IO"
                width={30}
                height={30}
            />
            <h1 className="text-xl font-bold text-gradient">HERO.IO</h1>
        </Link>
        <div className="flex items-center gap-4">
            <ul className="flex items-center gap-4">
                <NavLinks />
            </ul>
        </div>
        <div>
            <button className="btn bg-gradient ">
                <Link href="/" className="text-white flex items-center gap-2">
                <FaGithub />
                Contribute</Link>
            </button>
        </div>
    </div>
  )
}

export default Navbar