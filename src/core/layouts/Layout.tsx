import Head from "next/head"
import { BlitzLayout } from "@blitzjs/next"

interface LayoutProps {
  title?: string
  children?: React.ReactNode
}

const Layout: BlitzLayout<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "smart-stonks"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}

export default Layout
