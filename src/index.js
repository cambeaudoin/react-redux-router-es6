// import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);