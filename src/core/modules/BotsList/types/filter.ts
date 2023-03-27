import { TBotFilters } from "./bot"
import { TBotPeriodValues, TBotProgressSymbol, TBotStatus, TBotTradingType } from "./enumns"

export interface Filter {
  name: keyof TBotFilters
  icon: string
  values: (
    | `${TBotPeriodValues}`
    | `${TBotProgressSymbol}`
    | `${TBotTradingType}`
    | `${TBotStatus}`
  )[]
}
