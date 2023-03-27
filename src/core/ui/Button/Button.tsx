import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react"
import clsx from "clsx"

interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "outline" | "rounded" | "simple" | "disabled"
}

export const Button = ({ children, className, variant = "simple", ...other }: ButtonProps) => {
  const [style, setStyle] = useState("")

  useEffect(() => {
    switch (variant) {
      case "outline":
        return setStyle("bg-inherit py-[16px] px-[24px] outline-none rounded-[12px] ")
      case "rounded":
        return setStyle(
          "bg-purple-dark border-inherit border outline-none py-[16px] px-[24px] rounded-[12px] "
        )
      case "disabled":
        return setStyle("pointer-events-none py-[16px] px-[24px] outline-none rounded-[12px] ")
    }
  }, [variant])

  return (
    <button className={clsx(style, className)} {...other}>
      {children}
    </button>
  )
}
