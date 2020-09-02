import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { FINDER_THEME } from '../theme';
import { Styled } from './base.styles';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_URI,
  cache: new InMemoryCache(),
});

console.log({
  uri: process.env.REACT_APP_REACT_APP_GRAPH_URI,
  cache: new InMemoryCache(),
});

export const BaseLayout: React.FC = ({ children }) => (
  <MuiThemeProvider theme={FINDER_THEME}>
    <ThemeProvider theme={FINDER_THEME}>
      <CssBaseline />
      <Styled.Container>
        <Styled.Content>
          <ApolloProvider client={client}>{children}</ApolloProvider>
        </Styled.Content>
      </Styled.Container>
    </ThemeProvider>
  </MuiThemeProvider>
);
