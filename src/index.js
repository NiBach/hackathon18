import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './storeCreator';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css/dist/js/materialize'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

M.AutoInit();
