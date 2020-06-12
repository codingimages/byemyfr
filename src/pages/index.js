import React from "react"

// layout
import Layout from "../components/layout"

// header
import Header from "../components/header"

// seo
import SEO from "../components/seo"

// productos
import Productos from "../components/Productos.js"

// intro
import LeftImageRightText from "../components/leftImageRightText"

// image
import emilyImage from "../images/emily.jpg"


const IndexPage = () => {
  
  return(
    <Layout>
      <SEO title="by Emily" />
      <Header
        title="Hand made creations"
        subTitle="by Emy FR"
      />
      <LeftImageRightText
          title="Welcome to my page"
          paragraph="by Emy FR is an online store made for you.  Arts and crafts and handmade creation lovers will like my products. Made with high quality materials and from the bottom of my heart. Enjoy and wait for more products to come very soon."
          image={<img className="w-100" src={emilyImage} alt="brand logo"/>}
      />
      <Productos/>
    </Layout>
  )
}

export default IndexPage
