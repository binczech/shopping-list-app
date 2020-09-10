import React from 'react'
import { connect } from 'react-redux'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { loggedIn, postUser } from '../actions/loginActionCreator'
import { useDispatch } from 'react-redux';
import { Container, Button } from 'react-bootstrap'
import HeaderProfile from './HeaderProfile'

const Login = ({loginData}) => {
  const dispatch = useDispatch();

  function responseFacebook(response) {
    dispatch(loggedIn(response))
    dispatch(postUser(response))
  }

  return loginData.loggedIn ? (
    <Container>
      <HeaderProfile />
    </Container>
  ) : (
    <Container>
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
    </Container>
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
