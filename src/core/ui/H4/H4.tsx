import { DetailedHTMLProps, HTMLAttributes } from "react"
import clsx from "clsx"

interface H4Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export const H4 = ({ children, className, ...other }: H4Props) => {
  return (
    <h2
      className={clsx(
        "font-bold dark:text-white text-dark-900 text-[36px] leading-[44px]",
        className
      )}
      {...other}
    >
      {children}
    </h2>
  )
}
