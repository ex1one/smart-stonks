import { BotStatus } from "../BotStatus"
import { Bot } from "../../../../types"

export const BotDesc = ({
  id,
  state_isArchived,
  state_isPaused,
  leverage,
  symbol,
  pnl_deposit_actual,
}: Bot) => {
  const actDep = pnl_deposit_actual?.toFixed(0) || "-"

  return (
    <div className="grow overflow-hidden px-3 py-1">
      <div className="flex items-baseline ">
        <div className="text-lg">{symbol}</div>
        <div className="pl-2 font-bold text-gray-500">{leverage}x</div>
        <div className="pl-2 font-bold text-gray-500">${actDep}</div>
      </div>
      <div className="text-gray-400 flex items-center justify-start overflow-hidden text-ellipsis whitespace-nowrap pb-1.5 text-[13px] font-bold">
        <BotStatus isPaused={state_isPaused} isArchived={state_isArchived} />
        {id}
      </div>
    </div>
  )
}
