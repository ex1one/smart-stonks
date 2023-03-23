import { DetailedHTMLProps, HTMLAttributes } from "react"
import clsx from "clsx"

interface H3Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export const H3 = ({ children, className, ...other }: H3Props) => {
  return (
    <h2
      className={clsx(
        "font-bold dark:text-white text-dark-900 text-[40px] leading-[50px]",
        className
      )}
      {...other}
    >
      {children}
    </h2>
  )
}
