import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { HomePage } from './pages';
import { CONFIG } from './config';

const ROUTES: Array<RouteProps> = [
  {
    path: '/',
    component: HomePage,
  },
];

const client = new ApolloClient({
  uri: CONFIG.graphUri,
  cache: new InMemoryCache(),
  connectToDevTools: CONFIG.isDevelopment,
  headers: { Authorization: `Bearer ${CONFIG.authToken}` },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router basename='/'>
        <Switch>
          {ROUTES.map((route, idx) => (
            <Route key={idx} {...route} />
          ))}
        </Switch>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
