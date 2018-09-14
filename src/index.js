import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store, history } from './storeCreator';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import { ConnectedRouter } from 'connected-react-router'
import FacebookProvider from 'react-facebook';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <FacebookProvider appId="1827157337399053">
        <App />
      </FacebookProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

M.AutoInit();

// // We listen to the resize event
// window.addEventListener('resize', () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

window.addEventListener('load', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})
