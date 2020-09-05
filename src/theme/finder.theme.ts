import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

export const FINDER_THEME = createMuiTheme({
  breakpoints: {
    values: {
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  } as any, // FIXME: Use module augmentation
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
