import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'

const ShoppingLists = () => {
  return (
    <Container>
      <p className="home-title">
        Seznam nákupních seznamů
      </p>
      TODO: List of Shopping lists.
    </Container> 
  )
}

const mapStateToProps = (state, ownProps) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingLists)
