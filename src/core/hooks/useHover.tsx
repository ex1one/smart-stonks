import { useCallback, useRef, useState } from "react"

export const useHover = <T extends Element>() => {
  const [value, setValue] = useState(false)

  const handleMouseOver = useCallback(() => setValue(true), [])
  const handleMouseOut = useCallback(() => setValue(false), [])

  const ref = useRef<T | null>(null)

  const callbackRef = useCallback(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener("mouseover", handleMouseOver)
        ref.current.removeEventListener("mouseout", handleMouseOut)
      }

      ref.current = node

      if (ref.current) {
        ref.current.addEventListener("mouseover", handleMouseOver)
        ref.current.addEventListener("mouseout", handleMouseOut)
      }
    },
    [handleMouseOver, handleMouseOut]
  )

  return [callbackRef, value]
}
