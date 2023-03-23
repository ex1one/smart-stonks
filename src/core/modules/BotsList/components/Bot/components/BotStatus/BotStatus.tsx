import { useTheme } from "next-themes"
import { Icon } from "src/core/ui"

interface BotStatusProps {
  isPaused: boolean | null
  isArchived: boolean | null
}

export const BotStatus = ({ isPaused, isArchived }: BotStatusProps) => {
  const { theme } = useTheme()

  return (
    <>
      {isPaused && !isArchived ? (
        <Icon name="pause" className="w-[21px] h-[21px] mr-[2px] -ml-[3px]" />
      ) : null}

      {isArchived ? <Icon name="archive" className="w-[14px] h-[14px] mr-2" /> : null}

      {!isArchived && !isPaused && (
        <Icon name="robot" className="w-[16px] h-[16px] mr-[8px] -mt-[2px] text-[#a5850f]" />
      )}
    </>
  )
}
