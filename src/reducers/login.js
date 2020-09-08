import * as actions from '../actions/login'
const initialState = {
  loggedIn: false,
  accessToken: '',
  name: '',
  email: '',
  userID: '',
  picture: ''
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGGED_IN:
      return {
        loggedIn: true,
        accessToken: action.payload.data.accessToken,
        name: action.payload.data.name,
        email: action.payload.data.email,
        userID: action.payload.data.userID,
        picture: action.payload.data.picture.data.url
      }

    case actions.UNLOGGED:
      return initialState

    default:
      return state
  }
}

export default login;