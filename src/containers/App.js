import React from 'react';
import Home from './Home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App
