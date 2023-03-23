import Image from "next/image"
import { useTheme } from "next-themes"

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
        "h-screen overflow-hidden relative flex items-center flex-col justify-center",
        theme === "light" ? s.lightMain : s.darkMain
      )}
    >
      <Content />
      <Image
        className="absolute sm:block hidden sm:right-20 sm:top-10 h-12 w-12 sm:h-14 sm:w-14 md:w-16 md:h-16 lg:w-[86px] lg:h-[86px] object-contain"
        src={square1}
        alt=""
      />
      <Image
        className="absolute sm:block hidden sm:right-10 sm:top-30 h-12 w-12 sm:h-14 sm:w-14 md:w-16 md:h-16 lg:w-[86px] lg:h-[86px] object-contain"
        src={square3}
        alt=""
      />
      <Image
        className="absolute sm:block hidden sm:right-60 sm:bottom-20 h-12 w-12 sm:h-14 sm:w-14 md:w-16 md:h-16 lg:w-[86px] lg:h-[86px] object-contain"
        src={square5}
        alt=""
      />
      <Image
        className="absolute sm:block hidden sm:left-10 sm:top-10 h-12 w-12 sm:h-14 sm:w-14 md:w-16 md:h-16 lg:w-[86px] lg:h-[86px] object-contain"
        src={square4}
        alt=""
      />
      <Image
        className="absolute sm:block hidden sm:-left-5 sm:top-30 h-12 w-12 sm:h-14 sm:w-14 md:w-16 md:h-16 lg:w-[86px] lg:h-[86px] object-contain"
        src={square2}
        alt=""
      />
      <Image
        className="absolute sm:block hidden sm:left-60 sm:bottom-20 h-12 w-12 sm:h-14 sm:w-14 md:w-16 md:h-16 lg:w-[86px] lg:h-[86px] object-contain"
        src={square6}
        alt=""
      />
    </div>
  )
}
