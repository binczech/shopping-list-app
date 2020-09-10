import * as actions from './login'
import axios from 'axios'

export function loggedIn(data) {
  return {
    type: actions.LOGGED_IN,
    payload: {
      data: data
    }
  }
}

export function unlogged() {
  return {
    type: actions.UNLOGGED,
    payload: {}
  }
}

export function storeUserRequest() {
  return {
    type: actions.STORE_USER_REQUEST
  }
}

export function storeUserSuccess() {
  return {
    type: actions.STORE_USER_SUCCESS
  }
}

export function storeUserFailure() {
  return {
    type: actions.STORE_USER_FAILURE
  }
}

export function postUser(data) {
  console.log(data)
  const user = {
    userID: data.userID,
    email: data.email,
    name: data.name
  }
  return (dispatch) => {
    dispatch(storeUserRequest())
    axios.post(`${process.env.REACT_APP_API_URL}/users/`, user)
      .then(response => {
        dispatch(storeUserSuccess())
        console.log("Created new user.")
      })
      .catch(error => {
        dispatch(storeUserFailure())
        console.log("User already exists")
      })
  }
}