import { Filter } from "../types"

export const ALL_FILTERS: Filter[] = [
  { name: "period", icon: "clock", values: ["1h", "3h", "24h", "7d", "31d", "all"] },
  { name: "progressSymbol", icon: "graph", values: ["%", "$"] },
  { name: "tradingType", icon: "bag", values: ["futures", "spot"] },
  { name: "status", icon: "robot", values: ["all", "active"] },
]
