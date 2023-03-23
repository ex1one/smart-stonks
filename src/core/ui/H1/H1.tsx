import { DetailedHTMLProps, HTMLAttributes } from "react"
import clsx from "clsx"

interface H1Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export const H1 = ({ children, className, ...other }: H1Props) => {
  return (
    <h1 className={clsx("font-bold dark:text-white text-dark-900", className)} {...other}>
      {children}
    </h1>
  )
}
