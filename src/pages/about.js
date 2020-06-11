import React from "react"

// layout
import Layout from "../components/layout"
import Header from "../components/header"
import LeftImageRightText from "../components/leftImageRightText"

// image
import logo from "../images/logo-alone.png"

const About = () => {
    return(
        <Layout>
            <Header
                title="About me"
                subTitle="Emy FR"
            />
            <LeftImageRightText
                title="Welcome to my page"
                paragraph="by Emy FR is an online store made for you.  Arts and crafts and handmade creation lovers will like my products. Made with high quality materials and from the bottom of my heart."
                image={<img className="w-100" src={logo} alt="logo image"/>}
            />
        </Layout>
    )
}

export default About