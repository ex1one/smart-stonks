import { Bot as BotT, TBotFilters } from "src/core/modules"

import { BotDesc, DepositProgressVertical, TimeElapsed } from "./components"
import { getUsdByPeriod } from "../../utils"

import s from "./Bot.module.css"
import clsx from "clsx"

interface BotProps {
  bot: BotT
  options: TBotFilters
}

export const Bot = ({ bot, options }: BotProps) => {
  const progressSymbol = options.progressSymbol

  let earnedOverPeriod = getUsdByPeriod(bot, options.period)
  if (progressSymbol == "%") {
    earnedOverPeriod /= bot.pnl_deposit_actual! / 100
  }

  const botProgress = progressSymbol + earnedOverPeriod?.toFixed(2)

  return (
    <div className="flex max-h-fit items-center justify-between overflow-hidden rounded-2xl border border-[#E2E2ED] bg-white shadow dark:border-[#262840] dark:bg-dark-900">
      <DepositProgressVertical {...bot} />
      <BotDesc {...bot} />

      <div className="flex flex-col items-center pr-3">
        <div
          className={clsx(
            "mb-1 -mt-[3px] w-[80px] text-right",
            earnedOverPeriod == 0 && "text-gray-500"
          )}
        >
          {botProgress}
        </div>

        <div className="text-[12px] font-bold text-[#9ca3af]">
          <TimeElapsed date={bot.stats_lastFinishedCyclaDate!} />
        </div>
      </div>
    </div>
  )
}
