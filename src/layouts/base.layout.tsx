import React from 'react';
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

import { FINDER_THEME } from '../theme';
import { Styled } from './base.styles';

export const BaseLayout: React.FC = ({ children }) => (
  <MuiThemeProvider theme={FINDER_THEME}>
    <ThemeProvider theme={FINDER_THEME}>
      <CssBaseline />
      <Styled.Container>
        <Styled.Content>{children}</Styled.Content>
      </Styled.Container>
    </ThemeProvider>
  </MuiThemeProvider>
);
