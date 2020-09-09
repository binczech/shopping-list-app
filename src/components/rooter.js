import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../containers/App'
import PropTypes from 'prop-types'
import { PersistGate } from 'redux-persist/integration/react'

const Rooter = ({ store, persistor }) => (
  <Provider store={store }>
    <PersistGate persistor={persistor}>
      <Router>
        <Switch>
          <Route path='/' component={App} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
)
Rooter.propTypes = {
  store: PropTypes.object.isRequired
}

export default Rooter
