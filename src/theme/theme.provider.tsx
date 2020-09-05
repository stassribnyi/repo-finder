import React from 'react';

import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { FINDER_THEME } from './finder.theme';

export const FinderThemeProvider: React.FC = ({ children }) => (
  <MuiThemeProvider theme={FINDER_THEME}>
    <SCThemeProvider theme={FINDER_THEME}>
      <CssBaseline />
      {children}
    </SCThemeProvider>
  </MuiThemeProvider>
);
