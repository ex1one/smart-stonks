import Image from "next/image"
import { H1 } from "src/core/ui"
import { MainInput } from "../MainInput"

import square1 from "public/assets/square-01.png"
import square2 from "public/assets/square-02.png"
import square3 from "public/assets/square-03.png"
import square4 from "public/assets/square-04.png"
import square5 from "public/assets/square-05.png"
import square6 from "public/assets/square-06.png"

export const Content = () => {
  return (
    <div className="sm:mb-36 mb-10 lg:pb-46 w-full max-w-fit px-4">
      <p className="text-gray-900 mb-5 text-base text-center tracking-widest uppercase">
        Non Fungible Tokens
      </p>
      <div className="flex gap-2 items-center justify-center sm:hidden">
        <Image className="h-14 w-14 object-contain" src={square1} alt="" />
        <Image className="h-14 w-14 object-contain" src={square3} alt="" />
        <Image className="h-14 w-14 object-contain" src={square5} alt="" />
      </div>
      <H1 className="text-5xl sm:my-0 my-10 text-center sm:text-start min-[525px]:text-8xl md:text-[120px] md:leading-[120px]">
        Smart <br /> <span className="sm:ml-32">Stonks</span>
      </H1>
      <MainInput />
      <div className="flex gap-2 items-center justify-center mt-2 sm:hidden">
        <Image className="h-14 w-14 object-contain" src={square4} alt="" />
        <Image className="h-14 w-14 object-contain" src={square2} alt="" />
        <Image className="h-14 w-14 object-contain" src={square6} alt="" />
      </div>
    </div>
  )
}
