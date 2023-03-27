import { Icon } from "src/core/ui"
import { EARN_PERIODS } from "../../../../constants"
import { TBotFilters } from "../../../../types"

interface BotFilterBarHeaderProps {
  filters: TBotFilters
  earnedOverPeriod: number
}

export const BotFilterBarHeader = ({ earnedOverPeriod, filters }: BotFilterBarHeaderProps) => {
  return (
    <div className="mb-3 flex w-full items-center justify-between">
      <button className="ml-1 flex min-h-[24px] cursor-pointer flex-row items-center rounded border border-gray-900 py-[3px] px-[13px] transition duration-300 hover:bg-gray-100 dark:hover:bg-purple-dark-light">
        <span className="text-sm">PRO</span>
        <Icon name="eye" className="ml-2 h-5 w-5" />
      </button>

      <div className="whitespace-no-wrap ml-auto mr-3 -mb-1 flex items-center text-sm">
        <Icon name="arrow-up" className="mr-1 -mt-1 h-5 w-5" />
        <span>{`$${earnedOverPeriod.toFixed(0)} ${EARN_PERIODS[filters.period]}`}</span>
      </div>
    </div>
  )
}
