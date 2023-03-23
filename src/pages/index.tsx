import { BlitzPage } from "@blitzjs/next"
import { Main } from "src/core/features/Main"
import { BotsList, getBots, Bot } from "src/core/modules"
import Layout from "src/core/layouts/Layout"
import { H3 } from "src/core/ui"

interface HomePageProps {
  bots: Bot[]
}

const HomePage: BlitzPage<{ bots }> = ({ bots }) => {
  return (
    <Layout>
      <Main />
      <div className="text-center border-t dark:border-gray-900 border-gray-500 py-10">
        <H3 className="mb-10">Live Bots</H3>
        <BotsList bots={bots} />
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
