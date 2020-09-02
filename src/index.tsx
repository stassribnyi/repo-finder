import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';

import { HomePage } from './pages';
require('dotenv').config();

const ROUTES: Array<RouteProps> = [
  {
    path: '/',
    component: HomePage,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {ROUTES.map((route, idx) => (
          <Route key={idx} {...route} />
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
