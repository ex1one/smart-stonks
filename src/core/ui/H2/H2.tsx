import { DetailedHTMLProps, HTMLAttributes } from "react"
import clsx from "clsx"

interface H2Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export const H2 = ({ children, className, ...other }: H2Props) => {
  return (
    <h2
      className={clsx(
        "font-bold dark:text-white text-dark-900 text-[48px] leading-[54px]",
        className
      )}
      {...other}
    >
      {children}
    </h2>
  )
}
