import { useState, useEffect, LegacyRef } from "react"
import { useTheme } from "next-themes"

import { useHover } from "src/core/hooks"

import { Icon } from "src/core/ui"

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [ref, hover] = useHover<HTMLDivElement>()

  const onChangeTheme = (theme: string) => () => {
    setTheme(theme)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className="transition duration-300 h-5 w-5">
      {theme === "light" ? (
        <Icon
          onClick={onChangeTheme("dark")}
          name={hover ? "fill-moon" : "moon"}
          className="h-full w-full cursor-pointer outline-none"
        />
      ) : (
        <Icon
          onClick={onChangeTheme("light")}
          name={hover ? "fill-sun" : "sun"}
          className="h-full w-full cursor-pointer outline-none"
        />
      )}
    </div>
  )
}
