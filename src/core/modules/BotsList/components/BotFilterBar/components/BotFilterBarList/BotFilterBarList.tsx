import { BotFilterBarItem } from "../BotFilterBarItem"

import { ALL_FILTERS } from "../../../../constants"
import { TBotFilters } from "../../../../types"

interface BotFilterBarListProps {
  filters: TBotFilters
  onFilterClick: (filters: TBotFilters) => void
  onFilterIconClick: (value: keyof TBotFilters) => void
  openFilters: {
    period: boolean
    progressSymbol: boolean
    tradingType: boolean
    status: boolean
  }
}

export const BotFilterBarList = ({
  onFilterClick,
  filters,
  onFilterIconClick,
  openFilters,
}: BotFilterBarListProps) => {
  return (
    <>
      {ALL_FILTERS.map((filter) => (
        <BotFilterBarItem
          key={filter.name}
          onFilterIconClick={onFilterIconClick}
          onFilterClick={onFilterClick}
          isOpenFilter={openFilters[filter.name]}
          filters={filters}
          {...filter}
        />
      ))}
    </>
  )
}
