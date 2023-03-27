import { Icon } from "src/core/ui"

import {
  Filter,
  TBotFilters,
  TBotPeriodValues,
  TBotProgressSymbol,
  TBotStatus,
  TBotTradingType,
} from "src/core/modules/BotsList"

import s from "./BotFilterBarItem.module.css"
import clsx from "clsx"

type SelectedFilter = (
  | `${TBotPeriodValues}`
  | `${TBotProgressSymbol}`
  | `${TBotTradingType}`
  | `${TBotStatus}`
)[]

interface BotFilterBarItemProps extends Filter {
  filters: TBotFilters
  icon: string
  onFilterClick: (filters: TBotFilters) => void
  onFilterIconClick: (value: keyof TBotFilters) => void
  isOpenFilter: boolean
}

export const BotFilterBarItem = ({
  onFilterClick,
  filters,
  isOpenFilter,
  onFilterIconClick,
  icon,
  values,
  name,
}: BotFilterBarItemProps) => {
  return (
    <div className={s.wrapper}>
      <Icon
        name={icon}
        className={clsx(
          s.filterIcon,
          "transition duration-300 hover:text-gray-900 dark:hover:text-purple-dark-light"
        )}
        onClick={() => onFilterIconClick(name)}
      />
      <ul className={isOpenFilter ? `${s.listActive} bg-white dark:bg-dark-900` : s.list}>
        {values.map((value, index) => (
          <li
            key={`${value}+${index}`}
            className={clsx(
              filters[name] === value
                ? `${s.itemActive} bg-gray-900 text-white dark:bg-purple-dark-light`
                : s.item,
              "transition duration-300 hover:bg-gray-900 hover:text-gray-500 dark:hover:bg-purple-dark-light dark:hover:text-white"
            )}
            onClick={() => onFilterClick({ ...filters, [name]: value })}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
