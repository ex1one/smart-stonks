import { TBotPeriodValues, TBotProgressSymbol, TBotStatus, TBotTradingType } from "./enumns"

export interface Bot {
  id: number
  name: string
  type: string
  stats_lastTradeDate: Date
  userId: number
  symbol: string
  leverage: number
  pnl_firstTrade: Date
  pnl_earnedUsdByCells: number
  pnl_earnedUsdByTrades: number
  pnl_earnedUsd_last1h: number
  pnl_earnedUsd_last3h: number
  pnl_earnedUsd_last8h: number
  pnl_earnedUsd_last24h: number
  pnl_earnedUsd_last7d: number
  pnl_earnedUsd_last31d: number
  pnl_finished_total: number
  pnl_finished_24h: number
  pnl_finished_31d: number
  pnl_deposit_actual: number
  stats_filledOrders: number
  stats_lastFinishedCyclaDate: Date
  stats_currentlyPlaced: number
  ordersCount: number
  prog_liqPrice: number
  prog_currentPrice: number
  prog_takeProfitPrice: number
  prog_lastOrderPrice: number
  state_isPaused: boolean
  state_isArchived: boolean
}

export interface TBotFilters {
  period: TBotPeriodValues | `${TBotPeriodValues}`
  progressSymbol: TBotProgressSymbol | `${TBotProgressSymbol}`
  tradingType: TBotTradingType | `${TBotTradingType}`
  status: TBotStatus | `${TBotStatus}`
}
