import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

export const FINDER_THEME = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
});
