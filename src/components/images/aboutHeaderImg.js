import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-background-image"

const AboutHeaderImg = ({children}) => {

    const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "index-header-img.jpg"}){
          childImageSharp{
            fluid{
              srcSet
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    const image = data.file.childImageSharp.fluid

    return(
        <Img
            style={{
                width: "100%",
                height: "70vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "contain"
            }}
            fluid={image}
        >
            <div className="bg-g-wine">
                {children}
            </div>
        </Img>
    ) 
}

export default AboutHeaderImg