import React from 'react';
import { hot } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import { LandingScreen } from '@screens';

export const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2adbc4',
      light: '#71fff7',
      dark: '#00a994',
      contrastText: '#000000',
    },
    secondary: {
      main: '#00142c',
      light: '#2a3a55',
      dark: '#000002',
      contrastText: '#ffffff',
    },
  },
  // spacing: 4,
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
    },
    MuiGridListTile: {
      tile: {
        overflow: 'visible',
      },
    },
  },
});

const App = () => {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={appTheme}>
        <LandingScreen />
      </ThemeProvider>
    </div>
  );
};

export default hot(module)(App);
