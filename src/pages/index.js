import React from "react"

// layout
import Layout from "../components/layout"

// header
import Header from "../components/header"

// seo
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="by Emily" />
    <Header
      title="Hand made creations"
      subTitle="by Emy FR"
    />
  </Layout>
)

export default IndexPage
