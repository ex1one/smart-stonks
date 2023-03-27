import { BotFilterBarItem } from "../BotFilterBarItem"

import { ALL_FILTERS } from "../../../../constants"
import { TBotFilters } from "../../../../types"

interface BotFilterBarListProps {
  filters: TBotFilters
  onFiltersChange: (filters: TBotFilters) => void
  onOpenFilters: (value: keyof TBotFilters) => void
  openFilters: {
    period: boolean
    progressSymbol: boolean
    tradingType: boolean
    status: boolean
  }
}

export const BotFilterBarList = ({
  onFiltersChange,
  filters,
  onOpenFilters,
  openFilters,
}: BotFilterBarListProps) => {
  return (
    <>
      {ALL_FILTERS.map((filter) => (
        <BotFilterBarItem
          key={filter.name}
          onOpenFilters={onOpenFilters}
          onFiltersChange={onFiltersChange}
          isOpenFilter={openFilters[filter.name]}
          filters={filters}
          {...filter}
        />
      ))}
    </>
  )
}
