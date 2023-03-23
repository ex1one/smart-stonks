import Image from "next/image"
import logo from "public/assets/logo.png"

import clsx from "clsx"

export const FirstBlock = () => {
  return (
    <div
      className={clsx(
        "dark:border-[#262840] p-10 border lg:border-r-0 lg:rounded-l-[20px] border-[#E2E2ED]"
      )}
    >
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" className="w-10 h-10" />
        <span className="text-3xl font-bold">Smart Stonks</span>
      </div>
    </div>
  )
}
