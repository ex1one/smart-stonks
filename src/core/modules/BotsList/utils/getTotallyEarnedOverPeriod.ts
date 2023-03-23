import { Bot, TBotPeriodValues } from "../types"

export function getTotallyEarnedOverPeriod(
  bots: Bot[],
  period: TBotPeriodValues | `${TBotPeriodValues}`
) {
  let totallyEarned = 0
  let path = "" as keyof Bot

  if (period === "all") {
    path = "pnl_earnedUsdByCells"
  } else {
    path = `pnl_earnedUsd_last${period}`
  }

  for (let bot of bots) {
    totallyEarned += bot[path] || 0
  }

  return totallyEarned
}
