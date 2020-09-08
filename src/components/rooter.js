import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../containers/App'
import PropTypes from 'prop-types'

const Rooter = ({ store }) => (
  <Provider store={store }>
    <Router>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </Router>
  </Provider>
)
Rooter.propTypes = {
  store: PropTypes.object.isRequired
}

export default Rooter
