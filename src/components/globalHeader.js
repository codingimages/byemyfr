import React from 'react'

//  bootstrap
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

const GlobalHeader = ({title, subTitle}) => {
    return(
        <Jumbotron fluid>
            <Container>
                <h1>{title}</h1>
                <p className="lead">
                {subTitle}
                </p>
            </Container>
        </Jumbotron>
    )
}

export default GlobalHeader