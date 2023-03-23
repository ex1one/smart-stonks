import { useState } from "react"

import { Bot, BotFilterBar } from "./components"
import { BOTS_PER_PAGE } from "./constants"

import { Bot as TBot, TBotFilters, TView } from "./types"
import { getTotallyEarnedOverPeriod, getUsdByPeriod } from "./utils"

import s from "./BotsList.module.css"

interface BotsListProps {
  bots: TBot[]
}

export const BotsList = ({ bots }: BotsListProps) => {
  const [filters, setFilters] = useState<TBotFilters>({
    period: "all",
    progressSymbol: "$",
    tradingType: "spot",
    status: "active",
  })

  const [view, setView] = useState<TView>(TView.light)
  const [statsPage, setStatsPage] = useState(0)

  const earnedOverPeriod = getTotallyEarnedOverPeriod(bots, filters.period)

  const sortedBots = bots
    .filter((bot) =>
      filters.status === "active" ? !bot.state_isArchived && !bot.state_isPaused : true
    )
    .sort(
      (bot: TBot, nextBot: TBot) =>
        getUsdByPeriod(nextBot, filters.period) - getUsdByPeriod(bot, filters.period)
    )
  // refactor - array prototype func
  const botsToDisplay = sortedBots.slice(statsPage * BOTS_PER_PAGE, (statsPage + 1) * BOTS_PER_PAGE)

  const handleChangeFilters = (newFilters: TBotFilters) => {
    setFilters(newFilters)
    setStatsPage(0)
  }

  const handleChangeView = (newView: TView) => {
    setView(newView)
  }

  const maxPageNumber = Math.round(sortedBots.length / BOTS_PER_PAGE) - 1

  const handleChangeStatsPage = (direction: "increase" | "decrease") => {
    if (direction === "decrease" && statsPage === 0) return
    if (direction === "increase" && statsPage === maxPageNumber) return

    const newPageNumber = direction === "increase" ? statsPage + 1 : statsPage - 1
    setStatsPage(newPageNumber)
  }

  return (
    <div className="">
      <BotFilterBar
        view={view}
        filters={filters}
        earnedOverPeriod={earnedOverPeriod}
        onFiltersChange={handleChangeFilters}
        onViewChange={handleChangeView}
        onStatsPageChange={handleChangeStatsPage}
      />
      <ul className={s.table}>
        {botsToDisplay.map((bot) => (
          <Bot key={bot.id} bot={bot} options={filters} />
        ))}
      </ul>
    </div>
  )
}
