import * as actions from '../actions/login'
const initialState = {
  loggedIn: false,
  accessToken: '',
  name: '',
  email: '',
  userID: '',
  picture: '',
  stored: false,
  storing: false
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
        accessToken: action.payload.data.accessToken,
        name: action.payload.data.name,
        email: action.payload.data.email,
        userID: action.payload.data.userID,
        picture: action.payload.data.picture.data.url
      }

    case actions.UNLOGGED:
      return initialState

    case actions.STORE_USER_REQUEST:
      return {
        ...state,
        storing: true
      }

    case actions.STORE_USER_SUCCESS:
      return {
        ...state,
        storing: false,
        stored: true
      }

    case actions.STORE_USER_FAILURE:
      return {
        ...state,
        storing: false,
        stored: false
      }

    default:
      return state
  }
}

export default login;