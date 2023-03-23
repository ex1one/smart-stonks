import { ThemeSwitch } from "src/core/components"
import { Button } from "src/core/ui/Button"
import { getDomElement } from "@sentry/utils"

export const HeaderMenu = () => {
  const onHandlerClick = () => {
    const footer = getDomElement("footer")

    footer.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        onClick={onHandlerClick}
        className="border border-gray-900 py-[10px] dark:text-gray-900"
        variant="outline"
      >
        Contact
      </Button>
      <ThemeSwitch />
    </div>
  )
}
