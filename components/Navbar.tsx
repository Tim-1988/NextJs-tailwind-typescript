import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Button from "./Button"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
        <Link href="/">
            <img src="/logo.jpg" alt="logo" width={74} height={29} />
        </Link>

            <ul className="hidden h-full gap-12 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="hover:font-bold hover:text-xl text-lg text-black flex items-center justify-center cursor-pointer transition-all" >
                  {link.label}
                </Link>
              ))}
            </ul>

            <div className="lg:flex items-center justify-center hidden">
              <Button type="button" title="Login" icon="/login.png"/>
            </div>

            <Image src="/menu.png" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  )
}

export default Navbar