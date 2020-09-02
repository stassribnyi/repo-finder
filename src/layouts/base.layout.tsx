import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import { FINDER_THEME } from '../theme';

export const BaseLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={FINDER_THEME}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
