import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Home from './containers/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const { store, persistor } = configureStore()

//ReactDOM.render(<Home store={store} persistor={persistor} />, document.getElementById('root'));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
