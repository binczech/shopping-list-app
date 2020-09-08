import React from 'react'
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { loggedIn, unlogged } from '../actions/loginActionCreator'
import { useDispatch } from 'react-redux';
import { Container, Button } from 'react-bootstrap'



const Login = ({loginData}) => {
  const dispatch = useDispatch();

  function responseFacebook(response) {
    dispatch(loggedIn(response))
  }

  return loginData.loggedIn ? (
    <Container>
      <Button
        onClick={() => {dispatch(unlogged())}}
        variant="outline-danger">
        Odhlásit se
      </Button>
    </Container>
  ) : (
    <FacebookLogin
      appId="2638621466392798"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      render={renderProps => (
        <Button
          variant="outline-primary"
          onClick={renderProps.onClick}>
          Facebook přihlášení
      </Button>
      )}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    loginData: state.login
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
