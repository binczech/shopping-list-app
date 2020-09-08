import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles.scss'
import Header from './header'
import Footer from './footer'

function Layout(props) {
  return (
    <Container className="body-layout">
      <Header />
      {props.children}
      <Footer />
    </Container>
  )
}

export default Layout
