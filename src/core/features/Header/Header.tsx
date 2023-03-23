import { Logo, NavBar, HeaderMenu } from "./components"

export const Header = () => {
  return (
    <header className="fixed w-full z-10 bg-white dark:bg-dark-900 top-0 left-0 h-16">
      <div className="flex items-center justify-between px-4 h-full w-full">
        <Logo />
        <NavBar />
        <HeaderMenu />
      </div>
    </header>
  )
}
