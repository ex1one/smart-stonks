import { useState } from "react"
import { Icon } from "src/core/ui"
import { TBotFilters, TView } from "../../types"
import { ALL_FILTERS, EARN_PERIODS } from "../../constants"

import s from "./BotFilterBar.module.css"

interface BotFilterBarProps {
  view: TView
  filters: TBotFilters
  earnedOverPeriod: number
  onFiltersChange: (filters: TBotFilters) => void
  onViewChange: (view: TView) => void
  onStatsPageChange: (direction: "increase" | "decrease") => void
}

export const BotFilterBar = ({
  onFiltersChange,
  filters,
  onViewChange,
  onStatsPageChange,
  view,
  earnedOverPeriod,
}: BotFilterBarProps) => {
  const [openFilters, setOpenFilters] = useState({
    periods: false,
    progressSymbols: false,
    tradingType: false,
    statuses: false,
  })

  return (
    <div className={s.container}>
      <div className={s.bar}>
        <div className={s.earnedContainer}>
          <button className={s.view}>
            <span>PRO</span>
            <Icon name="eye" className={s.viewIcon} />
          </button>

          <div className={s.earned}>
            <Icon name="arrow-up" className={s.arrowUp} />
            <span>{`$${earnedOverPeriod.toFixed(0)} ${EARN_PERIODS[filters.period]}`}</span>
          </div>
        </div>

        <div className={s.filters}>
          <div className={s.listContainer}>
            <Icon
              name="clock"
              className={s.filterIcon}
              onClick={() => setOpenFilters({ ...openFilters, periods: !openFilters.periods })}
            />
            <ul className={openFilters.periods ? s.listActive : s.list}>
              {ALL_FILTERS.periods.map((period, index) => (
                <li
                  key={`${period}+${index}`}
                  className={filters.period === period ? s.itemActive : s.item}
                  onClick={() => onFiltersChange({ ...filters, period })}
                >
                  {period}
                </li>
              ))}
            </ul>
          </div>

          <div className={s.listContainer}>
            <Icon
              name="graph"
              className={s.filterIcon}
              onClick={() =>
                setOpenFilters({ ...openFilters, progressSymbols: !openFilters.progressSymbols })
              }
            />
            <ul className={openFilters.progressSymbols ? s.listActive : s.list}>
              {ALL_FILTERS.progressSymbols.map((progressSymbol, index) => (
                <li
                  key={`${progressSymbol}+${index}`}
                  className={filters.progressSymbol === progressSymbol ? s.itemActive : s.item}
                  onClick={() => onFiltersChange({ ...filters, progressSymbol })}
                >
                  {progressSymbol}
                </li>
              ))}
            </ul>
          </div>

          <div className={s.listContainer}>
            <Icon
              name="bag"
              className={s.filterIcon}
              onClick={() =>
                setOpenFilters({ ...openFilters, tradingType: !openFilters.tradingType })
              }
            />
            <ul className={openFilters.tradingType ? s.listActive : s.list}>
              {ALL_FILTERS.tradingType.map((tradingType, index) => (
                <li
                  key={`${tradingType}+${index}`}
                  className={filters.tradingType === tradingType ? s.itemActive : s.item}
                  onClick={() => onFiltersChange({ ...filters, tradingType })}
                >
                  {tradingType}
                </li>
              ))}
            </ul>
          </div>

          <div className={s.listContainer}>
            <Icon
              name="robot"
              className={s.filterIcon}
              onClick={() => setOpenFilters({ ...openFilters, statuses: !openFilters.statuses })}
            />
            <ul className={openFilters.statuses ? s.listActive : s.list}>
              {ALL_FILTERS.statuses.map((status, index) => (
                <li
                  key={`${status}+${index}`}
                  className={filters.status === status ? s.itemActive : s.item}
                  onClick={() => onFiltersChange({ ...filters, status })}
                >
                  {status}
                </li>
              ))}
            </ul>
          </div>

          <div className={s.controllContainer}>
            <Icon
              name="arrow-left"
              className={s.controllArrow}
              onClick={() => onStatsPageChange("decrease")}
            />
            <Icon
              name="arrow-right"
              className={s.controllArrow}
              onClick={() => onStatsPageChange("increase")}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
