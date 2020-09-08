import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Login from '../containers/Login'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Co koupit?</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Domů</Nav.Link>
        </Nav>
        <Navbar.Text>
          <Login />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
