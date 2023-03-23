import Link from "next/link"
import { navBarMenu, NavBarMenuItem } from "./mocks"

export const NavBarItem = ({ text, link }: NavBarMenuItem) => {
  return (
    <Link legacyBehavior passHref href={link}>
      <a className="text-gray-900 hover:text-gray-900/60 transition duration-300">{text}</a>
    </Link>
  )
}

export const NavBar = () => {
  return (
    <div className="flex items-center gap-4">
      {navBarMenu.map(({ text, link }, index) => (
        <NavBarItem key={`${text}+${index}`} link={link} text={text} />
      ))}
    </div>
  )
}
