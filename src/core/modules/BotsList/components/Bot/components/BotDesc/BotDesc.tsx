import { BotStatus } from "../BotStatus"

interface BotDescProps {
  id: number
  depositActual: number | null
  symbol: string
  leverage: number
  isPaused: boolean
  isArchived: boolean
}

export const BotDesc = ({
  id,
  isArchived,
  isPaused,
  leverage,
  symbol,
  depositActual,
}: BotDescProps) => {
  const actDep = depositActual?.toFixed(0) || "-"

  return (
    <div className="grow overflow-hidden px-3 py-1">
      <div className="flex items-baseline ">
        <div className="text-lg">{symbol}</div>
        <div className="pl-2 font-bold text-gray-500">{leverage}x</div>
        <div className="pl-2 font-bold text-gray-500">${actDep}</div>
      </div>
      <div className="flex items-center justify-start pb-1.5 font-bold text-gray-400 text-[13px] overflow-hidden text-ellipsis whitespace-nowrap">
        <BotStatus isPaused={isPaused} isArchived={isArchived} />
        {id}
      </div>
    </div>
  )
}
