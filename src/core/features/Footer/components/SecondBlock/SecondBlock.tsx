import Link from "next/link"
import { Icon } from "src/core/ui"

export const SecondBlock = () => {
  return (
    <div className="dark:border-[#262840] p-10 border border-[#E2E2ED]">
      <ul className="flex flex-col gap-2 text-lg">
        <li>
          <Link passHref legacyBehavior href={`https://t.me/dtx92`}>
            <a
              target="_blank"
              className="flex items-center justify-between gap-2 cursor-pointer hover:text-dark-900/80 dark:hover:text-white/80 w-full"
            >
              Telegram
              <Icon name="telegram" className="h-6 w-6" />
            </a>
          </Link>
        </li>
        <li>
          <Link passHref legacyBehavior href={`https://t.me/smartstonks`}>
            <a
              target="_blank"
              className="flex items-center justify-between gap-2 cursor-pointer hover:text-dark-900/80 dark:hover:text-white/80 w-full"
            >
              Community
              <Icon name="chat-fill" className="h-6 w-6" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
