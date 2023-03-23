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
    <div className="flex justify-between dark:border-[#262840] border border-[#E2E2ED] items-center rounded-2xl overflow-hidden max-h-fit dark:bg-dark-900 bg-white shadow">
      <DepositProgressVertical
        botType={bot.type}
        depositActual={bot.pnl_deposit_actual!}
        earnedUsdByCells={bot.pnl_earnedUsdByCells!}
      />
      <BotDesc
        depositActual={bot.pnl_deposit_actual}
        id={bot.id}
        leverage={bot.leverage}
        symbol={bot.symbol}
        isArchived={bot.state_isArchived!}
        isPaused={bot.state_isPaused!}
      />

      <div className="flex flex-col items-center pr-3">
        <div
          className={clsx(
            "w-[80px] text-right mb-1 -mt-[3px]",
            earnedOverPeriod == 0 && "text-gray-500"
          )}
        >
          {botProgress}
        </div>

        <div className="font-bold text-[12px] text-[#9ca3af]">
          <TimeElapsed date={bot.stats_lastFinishedCyclaDate!} />
        </div>
      </div>
    </div>
  )
}
