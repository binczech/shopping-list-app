import * as actions from './login'

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