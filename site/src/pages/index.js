import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <Hero />
    <Services title="How can i help you?" />
  </Layout>
)

export default IndexPage
