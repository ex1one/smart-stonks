import { BlitzPage } from "@blitzjs/next"
import { Main } from "src/core/features/Main"
import { BotsList, getBots, Bot } from "src/core/modules"
import Layout from "src/core/layouts/Layout"
import { H3 } from "src/core/ui"
import { Suspense } from "react"

interface HomePageProps {
  bots: Bot[]
}

const HomePage: BlitzPage<{ bots }> = ({ bots }) => {
  return (
    <Layout>
      <Main />
      <div className="border-t border-gray-500 py-10 text-center dark:border-gray-900">
        <H3 className="mb-10">Live Bots</H3>
        <Suspense>
          <BotsList bots={bots} />
        </Suspense>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const bots = await getBots()

  return {
    props: { bots },
    revalidate: 30 * 60000,
  }
}

export default HomePage
