import { useTheme } from "next-themes"
import { Bot } from "../../../../types"
import clsx from "clsx"

export const DepositProgressVertical = ({
  type,
  pnl_deposit_actual,
  pnl_earnedUsdByCells,
}: Bot) => {
  const { theme } = useTheme()
  const progressInPx =
    (60 / 100) * Math.round(((pnl_earnedUsdByCells / pnl_deposit_actual) * 100) % 100)

  return (
    <div className={`flex h-[60px] w-1.5 flex-col-reverse rounded-sm bg-gray-500`}>
      <div
        className={clsx(
          "w-1.5",
          type == "long" && `${theme === "dark" ? "bg-purple-dark" : "bg-purple-dark"}`,
          type == "short" && `${theme === "dark" ? "bg-purple-dark" : "bg-purple-dark"}`
        )}
        style={{ height: `${progressInPx}px` }}
      />
    </div>
  )
}
