import { useTheme } from "next-themes"
import clsx from "clsx"

interface DepositProgressVerticalProps {
  earnedUsdByCells: number
  depositActual: number
  botType: string
}

export const DepositProgressVertical = ({
  depositActual,
  earnedUsdByCells,
  botType,
}: DepositProgressVerticalProps) => {
  const { theme } = useTheme()
  const progressInPx = (60 / 100) * Math.round(((earnedUsdByCells / depositActual) * 100) % 100)

  return (
    <div className={`flex flex-col-reverse h-[60px] w-1.5 rounded-sm bg-gray-500`}>
      <div
        className={clsx(
          "w-1.5",
          botType == "long" && `${theme === "dark" ? "bg-purple-dark" : "bg-purple-dark"}`,
          botType == "short" && `${theme === "dark" ? "bg-purple-dark" : "bg-purple-dark"}`
        )}
        style={{ height: `${progressInPx}px` }}
      />
    </div>
  )
}
