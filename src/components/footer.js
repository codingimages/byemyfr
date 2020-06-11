import React from 'react'
import {Link} from "gatsby"

// bootstrap
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import logo from "../images/logo-letters-horizontal.png"

export default function footer() {
    return (
        <footer className="bg-dark p-3">
            <Container>
                <Row>
                    <Col className="my-auto" sm="12" md="8">
                        <img className="my-auto w-100" src={logo} alt="site logo"/>
                    </Col>
                    <Col className="mt-5" sm="12" md="4">
                    <p className="lead text-light">Navigation</p>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/privacy">Privacy</Link>
                        </li>
                    </ul>
                    </Col>
                </Row>
                <div>
                    <p className="text-light text-center text-uppercase">&copy; {new Date().getFullYear()} all rights reserved</p>

                    <p className="text-light text-center text-uppercase">Creado por <a rel="noopener noreferrer" target="_blank" href="https://codingimages.com">CODING IMAGES</a></p>
                </div>
            </Container>
        </footer>
    )
}
