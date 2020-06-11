import React from "react"
import {Link} from "gatsby"

// navbar
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

// logo
import logo from "../images/logo-alone.png"

const Navigation = () => (

  <Navbar bg="light" variant="light" expand="md">
    <Container>
      <Navbar.Brand className="d-flex align-items-center">
        <Link className="d-flex align-items-center" to="/">
        <img
          alt="site logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        </Link>
        <h3 className="mb-0 ml-3 wine">by Emy FR</h3>
      </Navbar.Brand>


      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link
            className="nav-link yellow" 
            activeClassName="active" 
            to="/">Home
          </Link>
          <Link
            className="nav-link yellow" 
            activeClassName="active" 
            to="/about">About
          </Link>
          <Link
            className="nav-link yellow" 
            activeClassName="active" 
            to="/contact">Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Navigation
