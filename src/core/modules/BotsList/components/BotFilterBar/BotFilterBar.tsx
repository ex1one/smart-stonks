import { useState } from "react"
import { BotFilterBarList, SortDirection, BotFilterBarHeader } from "./components"

import { TBotFilters } from "../../types"

interface BotFilterBarProps {
  filters: TBotFilters
  earnedOverPeriod: number
  onFilterClick: (filters: TBotFilters) => void
  onStatsPageChange: (direction: "increase" | "decrease") => void
}

export const BotFilterBar = ({
  onFilterClick,
  filters,
  onStatsPageChange,
  earnedOverPeriod,
}: BotFilterBarProps) => {
  const [openFilters, setOpenFilters] = useState({
    period: false,
    progressSymbol: false,
    tradingType: false,
    status: false,
  })

  const doToggleFilter = (value: keyof TBotFilters) => {
    setOpenFilters((prev) => ({ ...prev, [value]: !prev[value] }))
  }

  return (
    <div className="mb-2 min-h-[50px] px-[3%]">
      <div className="flex w-full flex-col items-start px-[2%] pt-[15px] pb-[8px]">
        <BotFilterBarHeader filters={filters} earnedOverPeriod={earnedOverPeriod} />

        <div className="flex w-full flex-row items-center justify-between">
          <BotFilterBarList
            filters={filters}
            openFilters={openFilters}
            onFilterClick={onFilterClick}
            onFilterIconClick={doToggleFilter}
          />
          <SortDirection onStatsPageChange={onStatsPageChange} />
        </div>
      </div>
    </div>
  )
}
