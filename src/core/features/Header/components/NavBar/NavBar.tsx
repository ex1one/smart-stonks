import Link from "next/link"
import { getDomElement } from "@sentry/utils"
import { navBarMenu, NavBarMenuItem } from "./mocks"
import { Button } from "src/core/ui"

export const NavBarItem = ({ text, link }: NavBarMenuItem) => {
  return (
    <Link legacyBehavior passHref href={link}>
      <a className="text-gray-900 transition duration-300 hover:text-gray-900/60">{text}</a>
    </Link>
  )
}

export const NavBar = () => {
  const doScrollFooterClick = () => {
    const footer = getDomElement("footer")

    footer.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex items-center gap-4">
      {navBarMenu.map(({ text, link }, index) => (
        <NavBarItem key={`${text}+${index}`} link={link} text={text} />
      ))}
      <Button
        onClick={doScrollFooterClick}
        className="text-gray-900 transition duration-300 hover:text-gray-900/60"
        variant="outline"
      >
        Contact
      </Button>
    </div>
  )
}
