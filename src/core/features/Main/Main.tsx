import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Content } from "./components"

import blackCircles from "public/assets/blackCircles.png"
import whiteCircles from "public/assets/whiteCircles.png"

import square1 from "public/assets/square-01.png"
import square2 from "public/assets/square-02.png"
import square3 from "public/assets/square-03.png"
import square4 from "public/assets/square-04.png"
import square5 from "public/assets/square-05.png"
import square6 from "public/assets/square-06.png"

import s from "./Main.module.css"
import clsx from "clsx"

export const Main = () => {
  const { theme } = useTheme()

  return (
    <div
      className={clsx(
        `relative flex h-screen flex-col items-center justify-center overflow-hidden`
      )}
    >
      <Content />
      <Image
        className="absolute hidden h-12 w-12 object-contain sm:right-20 sm:top-10 sm:block sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[86px] lg:w-[86px]"
        src={square1}
        alt=""
      />
      <Image
        className="sm:top-30 absolute hidden h-12 w-12 object-contain sm:right-10 sm:block sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[86px] lg:w-[86px]"
        src={square3}
        alt=""
      />
      <Image
        className="absolute hidden h-12 w-12 object-contain sm:right-60 sm:bottom-20 sm:block sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[86px] lg:w-[86px]"
        src={square5}
        alt=""
      />
      <Image
        className="absolute hidden h-12 w-12 object-contain sm:left-10 sm:top-10 sm:block sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[86px] lg:w-[86px]"
        src={square4}
        alt=""
      />
      <Image
        className="sm:top-30 absolute hidden h-12 w-12 object-contain sm:-left-5 sm:block sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[86px] lg:w-[86px]"
        src={square2}
        alt=""
      />
      <Image
        className="absolute hidden h-12 w-12 object-contain sm:left-60 sm:bottom-20 sm:block sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-[86px] lg:w-[86px]"
        src={square6}
        alt=""
      />
    </div>
  )
}
