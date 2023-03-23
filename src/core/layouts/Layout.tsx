import Head from "next/head"
import { BlitzLayout } from "@blitzjs/next"

import logo from "public/assets/logo.png"

import { Header, Footer } from "src/core/features"

interface LayoutProps {
  title?: string
  children?: React.ReactNode
}

const Layout: BlitzLayout<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Smart-Stonks"}</title>
        <link rel="icon" href={logo.src} />
      </Head>

      <div className="pt-[64px] min-h-full flex flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
