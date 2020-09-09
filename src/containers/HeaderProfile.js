import React from 'react'
import { connect } from 'react-redux'
import { unlogged } from '../actions/loginActionCreator'
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

function HeaderLogin ({loginData, unlogged}) {
  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm="2">
        <img
          className="user-picture"
          alt="Obrázek uživatele"
          src={loginData.picture} ></img>
      </Col>
      <Col className="nav-link">
        {loginData.name}
      </Col>
      <Col>
        <Button
          onClick={() => {dispatch(unlogged())}}
          variant="outline-danger">
          Odhlásit se
        </Button>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => ({
  loginData: state.login
})

const mapDispatchToProps = (dispatch) => {
  return {
    unlogged: () => dispatch(unlogged())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogin)
