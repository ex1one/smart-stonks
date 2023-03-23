import { DetailedHTMLProps, HTMLAttributes } from "react"
import clsx from "clsx"

interface H5Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

export const H5 = ({ children, className, ...other }: H5Props) => {
  return (
    <h2
      className={clsx(
        "font-bold dark:text-white text-dark-900 text-[32px] leading-[40px]",
        className
      )}
      {...other}
    >
      {children}
    </h2>
  )
}
