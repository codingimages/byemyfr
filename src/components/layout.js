import React from "react"
import {Helmet} from "react-helmet"

// navigation
import Navigation from "./navigation"

// footer
import Footer from "./footer"

// main style
import "./styles/layout.css"

// bootstrap style
import "./styles/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Dosis:wght@500&display=swap" rel="stylesheet"/>
      </Helmet>
      <Navigation/>
        <main>
          {children}
        </main>
      <Footer/>
    </>
  )
}

export default Layout
