import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from 'history';
import ScrollToTop from './ScrollToTop';

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
