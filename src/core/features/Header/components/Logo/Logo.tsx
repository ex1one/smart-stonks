import Image from "next/image"
import logo from "public/assets/logo.png"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link legacyBehavior href="/">
      <a className="relative">
        <Image className="h-10 w-10 object-cover" alt="" src={logo} />
      </a>
    </Link>
  )
}
