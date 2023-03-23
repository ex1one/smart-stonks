import { FirstBlock, SecondBlock, ThirdBlock } from "./components"

import s from "./Footer.module.css"
import clsx from "clsx"

export const Footer = () => {
  return (
    <footer
      id="footer"
      className={clsx(
        "container grid-cols-1 lg:grid-cols-3 grid  mx-auto h-[400px] mb-20",
        s.footer
      )}
    >
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
    </footer>
  )
}
