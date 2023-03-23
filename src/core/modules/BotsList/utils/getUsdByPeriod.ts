import { TBotPeriodValues, Bot } from "../types"

export function getUsdByPeriod(bot: Bot, period: TBotPeriodValues | `${TBotPeriodValues}`) {
  if (period === "all") {
    return bot.pnl_earnedUsdByCells || 0
  }
  const path = `pnl_earnedUsd_last${period}` as keyof Bot

  return (bot[path] as number) || (0 as number)
}
