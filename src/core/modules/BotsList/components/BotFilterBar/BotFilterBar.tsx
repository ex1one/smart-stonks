import { useState } from "react"
import { Icon } from "src/core/ui"
import { TBotFilters, TView } from "../../types"
import { ALL_FILTERS, EARN_PERIODS } from "../../constants"

import s from "./BotFilterBar.module.css"
import clsx from "clsx"

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
    <div className="mb-2 min-h-[50px] px-[3%]">
      <div className="flex flex-col items-start w-full pt-[15px] pb-[8px] px-[2%]">
        <div className="w-full flex items-center justify-between mb-3">
          <button className="flex flex-row items-center rounded cursor-pointer ml-1 min-h-[24px] border border-gray-900 transition duration-300 py-[3px] px-[13px] dark:hover:bg-purple-dark-light hover:bg-gray-100">
            <span className="text-sm">PRO</span>
            <Icon name="eye" className="w-5 h-5 ml-2" />
          </button>

          <div className="flex items-center whitespace-no-wrap text-sm ml-auto mr-3 -mb-1">
            <Icon name="arrow-up" className="w-5 h-5 mr-1 -mt-1" />
            <span>{`$${earnedOverPeriod.toFixed(0)} ${EARN_PERIODS[filters.period]}`}</span>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          <div className={s.listContainer}>
            <Icon
              name="clock"
              className={clsx(
                s.filterIcon,
                "dark:hover:text-purple-dark-light hover:text-gray-900 transition duration-300"
              )}
              onClick={() => setOpenFilters((prev) => ({ ...prev, periods: !prev.periods }))}
            />
            <ul
              className={openFilters.periods ? `${s.listActive} dark:bg-dark-900 bg-white` : s.list}
            >
              {ALL_FILTERS.periods.map((period, index) => (
                <li
                  key={`${period}+${index}`}
                  className={clsx(
                    filters.period === period
                      ? `${s.itemActive} dark:bg-purple-dark-light text-white bg-gray-900`
                      : s.item,
                    "dark:hover:bg-purple-dark-light hover:bg-gray-900 hover:text-gray-500 dark:hover:text-white transition duration-300"
                  )}
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
              className={clsx(
                s.filterIcon,
                "dark:hover:text-purple-dark-light hover:text-gray-900 transition duration-300"
              )}
              onClick={() =>
                setOpenFilters((prev) => ({
                  ...prev,
                  progressSymbols: !openFilters.progressSymbols,
                }))
              }
            />
            <ul
              className={
                openFilters.progressSymbols ? `${s.listActive} dark:bg-dark-900 bg-white` : s.list
              }
            >
              {ALL_FILTERS.progressSymbols.map((progressSymbol, index) => (
                <li
                  key={`${progressSymbol}+${index}`}
                  className={clsx(
                    filters.progressSymbol === progressSymbol
                      ? `${s.itemActive} dark:bg-purple-dark-light text-white bg-gray-900`
                      : s.item,
                    "dark:hover:bg-purple-dark-light hover:bg-gray-900 hover:text-gray-500 dark:hover:text-white transition duration-300"
                  )}
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
              className={clsx(
                s.filterIcon,
                "dark:hover:text-purple-dark-light hover:text-gray-900 transition duration-300"
              )}
              onClick={() =>
                setOpenFilters({ ...openFilters, tradingType: !openFilters.tradingType })
              }
            />
            <ul
              className={
                openFilters.tradingType ? `${s.listActive} dark:bg-dark-900 bg-white` : s.list
              }
            >
              {ALL_FILTERS.tradingType.map((tradingType, index) => (
                <li
                  key={`${tradingType}+${index}`}
                  className={clsx(
                    filters.tradingType === tradingType
                      ? `${s.itemActive} dark:bg-purple-dark-light text-white bg-gray-900`
                      : s.item,
                    "dark:hover:bg-purple-dark-light hover:bg-gray-900 hover:text-gray-500 dark:hover:text-white transition duration-300"
                  )}
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
              className={clsx(
                s.filterIcon,
                "dark:hover:text-purple-dark-light hover:text-gray-900 transition duration-300"
              )}
              onClick={() => setOpenFilters({ ...openFilters, statuses: !openFilters.statuses })}
            />
            <ul
              className={
                openFilters.statuses ? `${s.listActive} dark:bg-dark-900 bg-white` : s.list
              }
            >
              {ALL_FILTERS.statuses.map((status, index) => (
                <li
                  key={`${status}+${index}`}
                  className={clsx(
                    filters.status === status
                      ? `${s.itemActive} dark:bg-purple-dark-light text-white bg-gray-900`
                      : s.item,
                    "dark:hover:bg-purple-dark-light hover:bg-gray-900 hover:text-gray-500 dark:hover:text-white transition duration-300"
                  )}
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
              className={clsx(
                s.controllArrow,
                "dark:hover:text-purple-dark-light hover:text-gray-900 transition duration-300"
              )}
              onClick={() => onStatsPageChange("decrease")}
            />
            <Icon
              name="arrow-right"
              className={clsx(
                s.controllArrow,
                "dark:hover:text-purple-dark-light hover:text-gray-900 transition duration-300"
              )}
              onClick={() => onStatsPageChange("increase")}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
