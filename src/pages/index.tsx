import { BlitzPage } from "@blitzjs/next"
import Layout from "src/core/layouts/Layout"

import { ThemeSwitch } from "src/core/components"

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <ThemeSwitch />
    </Layout>
  )
}

export default Home
