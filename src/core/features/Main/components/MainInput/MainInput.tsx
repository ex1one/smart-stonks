import { useRouter } from "next/router"
import { useState, ChangeEvent } from "react"
import { Input } from "src/core/ui"

import s from "./MainInput.module.css"
import clsx from "clsx"

export const MainInput = () => {
  const { push } = useRouter()
  const [value, setValue] = useState("")

  const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
  }

  const handleSearch = () => {
    return push(`/bots/${value.trim()}`)
  }

  return (
    <Input
      value={value}
      onChange={onChangeInput}
      onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : undefined)}
      type="text"
      inputClassName={clsx(
        "bg-white text-dark-900 w-full border border-dark-900 pl-[32px] h-full rounded-2xl"
      )}
      className={clsx("max-w-[560px] w-full h-16 my-10 sm:mt-[90px]", s.input)}
      endIcon={{
        className:
          "absolute top-1/2 h-6 w-6 text-purple-dark cursor-pointer -translate-y-1/2 right-4",
        name: "search",
        onClick: handleSearch,
      }}
      placeholder="Input API Key"
    />
  )
}
