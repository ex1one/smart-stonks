import { useState, useEffect, LegacyRef } from "react"
import { useTheme } from "next-themes"

import { useHover } from "src/core/hooks"

import { Icon } from "src/core/ui"

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [ref, hover] = useHover<HTMLDivElement>()

  const doChangeTheme = (theme: string) => () => {
    setTheme(theme)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} className="h-5 w-5 transition duration-300">
      {theme === "light" ? (
        <Icon
          onClick={doChangeTheme("dark")}
          name={hover ? "fill-moon" : "moon"}
          className="h-full w-full cursor-pointer outline-none"
        />
      ) : (
        <Icon
          onClick={doChangeTheme("light")}
          name={hover ? "fill-sun" : "sun"}
          className="h-full w-full cursor-pointer outline-none"
        />
      )}
    </div>
  )
}
